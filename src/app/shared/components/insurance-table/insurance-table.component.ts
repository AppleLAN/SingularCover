import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Insurance } from '../../models/insurance';
import { FavoriteService } from '../../services';

@Component({
  selector: 'app-insurance-table',
  templateUrl: './insurance-table.component.html',
  styleUrls: ['./insurance-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsuranceTableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() list: Insurance[];

  displayedColumns: string[] = ['name', 'brand', 'kind', 'price', 'favorite'];
  dataSource: MatTableDataSource<Insurance>;

  constructor(private cd: ChangeDetectorRef, private favoriteService: FavoriteService) {
    // Create 100 users
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.list);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.list.currentValue) {
      this.assignDataSource(changes.list.currentValue);
    }
  }

  favoriteToggle(event: Insurance) {
    this.favoriteService.setFavoriteToDataBase(event.key, event);
  }

  private assignDataSource(dataSource) {
    this.dataSource = new MatTableDataSource(dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

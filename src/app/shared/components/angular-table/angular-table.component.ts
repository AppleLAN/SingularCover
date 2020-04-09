import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Insurance } from '@src/app/modules/insurance-selector/models';
import { FavoriteService } from '../../services';

@Component({
  selector: 'app-angular-table',
  templateUrl: './angular-table.component.html',
  styleUrls: ['./angular-table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularTableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() list: any[];

  displayedColumns: string[] = ['name', 'brand', 'kind', 'price', 'favorite'];
  dataSource: MatTableDataSource<Insurance[]>;

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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

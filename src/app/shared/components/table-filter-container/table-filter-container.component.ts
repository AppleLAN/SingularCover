import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Insurance } from '../../models';
import { UtilitiesService } from '../../services';

@Component({
  selector: 'app-table-filter-container',
  templateUrl: './table-filter-container.component.html',
  styleUrls: ['./table-filter-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterContainerComponent {
  @Input() dataSource: MatTableDataSource<Insurance>;
  @Input() list: Insurance[];
  @Output() dataSourceChange: EventEmitter<any> = new EventEmitter();

  kindFilterValue = '';
  filterValue: string[] = [];

  constructor(private utilitiesService: UtilitiesService) {}

  applyFilter(event: Event | string) {
    if (typeof event === 'string') {
      this.kindFilterValue = event;
    } else {
      this.filterValue = (event.target as HTMLInputElement).value.split(',');
    }

    const formattedValue = [...this.filterValue, ...[this.kindFilterValue]];
    this.dataSource.data = this.filterDataSource(formattedValue, this.list);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSourceChange.emit(this.dataSource);
  }

  /**
   * @desc filters an Insurance array by a string array
   * @param formattedValue - a string array containing the values to filter the list
   * @param list - the insurance list to be filtered
   * @return Insurance[]
   */
  private filterDataSource(formattedValue: string[], list: Insurance[]): Insurance[] {
    return formattedValue
      ? list.filter((element) => {
          return this.utilitiesService.searchElementInArray(element, formattedValue);
        })
      : list;
  }
}

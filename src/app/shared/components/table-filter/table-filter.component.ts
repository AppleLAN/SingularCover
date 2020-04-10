import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFilterComponent {
  @Output() selectedValueChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  emitValue(event: Event | string) {
    this.selectedValueChange.emit(event);
  }
}

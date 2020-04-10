import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateManagerService } from '@src/app/core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kind } from '../../models';
import { UtilitiesService } from '../../services';

@Component({
  selector: 'app-kinds-selector',
  templateUrl: './kinds-selector.component.html',
  styleUrls: ['./kinds-selector.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KindsSelectorComponent implements OnInit {
  @Input() selectedValue;
  @Output() selectedValueChange: EventEmitter<any> = new EventEmitter();
  kinds$: Observable<Kind[]>;

  constructor(private stateManagerService: StateManagerService, private utilitiesService: UtilitiesService) {}

  ngOnInit(): void {
    this.kinds$ = this.stateManagerService.getDataBase('/kinds').pipe(map((insurance) => this.utilitiesService.formatKinds(insurance)));
  }

  emitValue(event: Kind) {
    this.selectedValueChange.emit(event);
  }
}

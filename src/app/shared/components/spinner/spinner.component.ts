import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpinnerService } from '../../services';

@Component({
  selector: 'app-spinner',
  template: ` <div class="loading" *ngIf="subscription$ | async"></div> `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  subscription$: Observable<boolean>;

  constructor(private spinnerService: SpinnerService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.subscription$ = this.spinnerService.getSpinnerObservable().pipe(map((s) => s.show));
  }
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from '@src/app/core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-spinner',
  template: ` <div class="loading" *ngIf="subscription$ | async"></div> `,
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent implements OnInit {
  subscription$: Observable<boolean>;

  constructor(private spinnerService: SpinnerService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.subscription$ = this.spinnerService.getSpinnerObservable().pipe(map((s) => s.show));
  }
}

import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@src/app/shared/services';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Insurance } from './models';

@Component({
  selector: 'app-insurance-selector',
  templateUrl: './insurance-selector.component.html',
  styleUrls: ['./insurance-selector.component.sass'],
})
export class InsuranceSelectorComponent implements OnInit {
  insurances$: Observable<Insurance[]>;

  constructor(private db: AngularFireDatabase, private spinnerService: SpinnerService) {
    this.spinnerService.displaySpinner(true);
    this.insurances$ = db
      .list('/insurances')
      .valueChanges()
      .pipe(
        map((insurances) => {
          this.spinnerService.displaySpinner(false);
          return insurances.map((i: Insurance) => ({
            ...i,
            brandImage: `assets/icons/${i['brand-image']}`,
            kindImage: `assets/icons/${i['Kind-image']}`,
          }));
        }),
        catchError(() => {
          this.spinnerService.displaySpinner(false);
          return of(null);
        })
      );
  }
  ngOnInit(): void {}
}

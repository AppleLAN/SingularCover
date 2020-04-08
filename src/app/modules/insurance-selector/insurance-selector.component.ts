import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Insurance } from './models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-insurance-selector',
  templateUrl: './insurance-selector.component.html',
  styleUrls: ['./insurance-selector.component.sass'],
})
export class InsuranceSelectorComponent implements OnInit {
  public insurances$: Observable<Insurance[]>;

  constructor(db: AngularFireDatabase) {
    this.insurances$ = db
      .list('/insurances')
      .valueChanges()
      .pipe(
        map((insurances) => {
          return insurances.map((i: Insurance) => ({
            ...i,
            brandImage: `assets/icons/${i['brand-image']}`,
            kindImage: `assets/icons/${i['Kind-image']}`,
          }));
        })
      );
  }
  ngOnInit(): void {}
}

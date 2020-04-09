import { Component, OnInit } from '@angular/core';
import { StateManagerObject } from '@src/app/core/models';
import { StateManagerService } from '@src/app/core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Insurance } from './models';
import { UtilitiesService } from '@src/app/shared/services/utilities.service';

@Component({
  selector: 'app-insurance-selector',
  templateUrl: './insurance-selector.component.html',
  styleUrls: ['./insurance-selector.component.sass'],
})
export class InsuranceSelectorComponent {
  insurances$: Observable<Insurance[]>;

  constructor(private stateManagerService: StateManagerService, private utilitiesService: UtilitiesService) {
    this.insurances$ = this.stateManagerService.getDataBase('/insurances').pipe(
      map((insurances) => {
        return this.utilitiesService.formatInsurances(insurances);
      })
    );
  }
}

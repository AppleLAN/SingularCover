import { Component } from '@angular/core';
import { StateManagerService } from '@src/app/core/services';
import { Insurance } from '@src/app/shared/models/insurance';
import { UtilitiesService } from '@src/app/shared/services/utilities.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

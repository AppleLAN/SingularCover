import { Injectable } from '@angular/core';
import { StateManagerObject } from '@src/app/core/models';
import { Insurance } from '@src/app/modules/insurance-selector/models';

/**
 * @desc this service will hold functionalities shared across the app components.
 * @author Alan Buscaglia alanbuscaglia@gmail.com
 */

@Injectable()
export class UtilitiesService {
  formatInsurances(insurances: StateManagerObject[]): Insurance[] {
    return insurances.map((i: StateManagerObject) => ({
      ...i.data,
      key: i.key,
      brandImage: `assets/icons/${i.data['brand-image']}`,
      kindImage: `assets/icons/${i.data['Kind-image']}`,
    }));
  }
}

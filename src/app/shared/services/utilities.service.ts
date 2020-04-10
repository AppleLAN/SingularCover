import { Injectable } from '@angular/core';
import { StateManagerObject } from '@src/app/core/models';
import { Insurance, Kind, SelectObject } from '../models';

/**
 * @desc this service will hold functionalities shared across the app components.
 * @author Alan Buscaglia alanbuscaglia@gmail.com
 */

@Injectable()
export class UtilitiesService {
  /**
   * @desc formats the StateManageObjectArray to include the brand and kind image route
   * @param insurances - the insurances contained inside the StateManagerObject array
   * @return Insurance[]
   */
  formatInsurances(insurances: StateManagerObject[]): Insurance[] {
    return insurances.map((i: StateManagerObject) => ({
      ...i.data,
      key: i.key,
      brandImage: `assets/icons/${i.data['brand-image']}`,
      kindImage: `assets/icons/${i.data['Kind-image']}`,
    }));
  }

  /**
   * @desc formats the StateManageObjectArray to include the kind image route, the correct object properties and a default selector object
   * @param insurances - the insurances contained inside the StateManagerObject array
   * @return Kind[]
   */
  formatKinds(insurances: StateManagerObject[]): Kind[] {
    return [
      {
        kind: 'None',
        kindImage: '',
      },
      ...insurances.map((i: StateManagerObject) => ({
        kind: i.data.kind,
        kindImage: `assets/icons/${i.data['Kind-image']}`,
      })),
    ];
  }

  /**
   * @desc formats an object to include the correct object properties for a mat-select
   * @param value - the value to be contained inside the SelectObject
   * @param viewValue - the viewValue to be contained inside the SelectObject
   * @return SelectObject
   */
  formatSelectObject(value: any, viewValue: string): SelectObject {
    return { value, viewValue };
  }

  /**
   * @desc checks that every value inside an array is included inside an object property at least once
   * @param object - the object to be iterated
   * @param value - the string array to be checked
   * @return boolean
   */
  searchElementInArray(object: Insurance, value: string[]): boolean {
    return value.every((v) => {
      const formattedValue = v.trim().toLowerCase();
      return Object.keys(object).find((k) => typeof object[k] === 'string' && object[k].toLowerCase().includes(formattedValue));
    });
  }
}

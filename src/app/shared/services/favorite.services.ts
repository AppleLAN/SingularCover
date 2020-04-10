import { Injectable } from '@angular/core';
import { StateManagerObject } from '@src/app/core/models';
import { StateManagerService } from '@src/app/core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Insurance } from '../models';

/**
 * @desc this service will hold functionalities for custom firebase favorites state mamagement.
 * @author Alan Buscaglia alanbuscaglia@gmail.com
 */

@Injectable()
export class FavoriteService {
  constructor(private stateManger: StateManagerService) {}

  /**
   * @desc gets a list of favorites from the data base - it triggers an event
   * @return void
   */
  getFavoriteFromDataBase(): Observable<StateManagerObject[]> {
    return this.stateManger.getDataBase('/insurances').pipe(map((insurances) => insurances.filter((i) => !!i.data.favorite)));
  }

  /**
   * @desc updates an element as favorite to the data base - it triggers an event
   * @param dbName - the route of the database we want to update
   * @param value - the value we want as an addition to the database
   * @return void
   */
  setFavoriteToDataBase(objectKey: string, value: Insurance) {
    const formattedValue = {
      ...value,
      favorite: !value.favorite,
    };
    delete formattedValue.key;
    this.stateManger.updateDataBaseElement('/insurances', objectKey, formattedValue);
  }
}

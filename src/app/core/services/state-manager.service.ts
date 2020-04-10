import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StateManagerObject } from '../models';
import { NotificationService } from './notification.service';
import { SpinnerService } from './spinner.service';

/**
 * @desc this service will hold functionalities for custom firebase state mamagement.
 * @author Alan Buscaglia alanbuscaglia@gmail.com
 */

@Injectable()
export class StateManagerService {
  constructor(private db: AngularFireDatabase, private spinnerService: SpinnerService, private ns: NotificationService) {}

  /**
   * @desc returns the observable that contains the data base for async operations - it listens for changes
   * @param dbName - the route of the database we want to obtain
   * @return Observable
   */

  getDataBase(dbName: string): Observable<StateManagerObject[]> {
    const method = this.db
      .list(dbName)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const key = a.payload.key;
            const data = a.payload.val() as Array<any>;
            return { data, key };
          })
        )
      );
    return this.callServiceFunction(method);
  }

  /**
   * @desc adds an element to the data base - it triggers an event
   * @param dbName - the route of the database we want to update
   * @param value - the value we want as an addition to the database
   * @return void
   */
  addDataBaseElement(dbName: string, value: any) {
    const promise = this.db.list(dbName).push(value);
    promise.then((_) => this.ns.showNotification('Add successful', true)).catch((err) => this.ns.showNotification('Add error', false));
  }
  /**
   * @desc updates an element of the data base - it triggers an event
   * @param dbName - the route of the database we want to update
   * @param objectKey - the key of the database object we want to update
   * @param value - the value we want as an update for the database
   * @return void
   */
  updateDataBaseElement(dbName: string, objectKey: string, value: any) {
    const promise = this.db.list(dbName).set(objectKey, value);
    promise
      .then((_) => this.ns.showNotification('Update successful', true))
      .catch((err) => this.ns.showNotification('Update error', false));
  }

  /**
   * @desc deletes an element of the data base - it triggers an event
   * @param dbName - the route of the database we want to update
   * @param objectKey - the key of the database object we want to remove
   * @return void
   */
  deleteDataBaseElement(dbName: string, objectKey: string) {
    const promise = this.db.list(dbName).remove(objectKey);
    promise
      .then((_) => this.ns.showNotification('Delete successful', true))
      .catch((err) => this.ns.showNotification('Delete error', false));
  }

  /**
   * @desc includes the spinner functionality to async functions
   * @param method - the method that is going to have the added functionality
   * @return void
   */
  private callServiceFunction(method: Observable<any>) {
    this.spinnerService.displaySpinner(true);
    return method.pipe(
      map((result) => {
        this.spinnerService.displaySpinner(false);
        return result;
      }),
      catchError((error) => {
        this.spinnerService.displaySpinner(false);
        return throwError(error);
      })
    );
  }
}

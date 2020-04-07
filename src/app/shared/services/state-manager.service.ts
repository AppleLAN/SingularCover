import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
import { map } from 'rxjs/operators';

/**
 * @desc this class will hold functionalities for custom state mamagement that can be extended by a service.
 * each module can inlude a service extending this class as a state container if needed.
 * @author Alan Buscaglia alanbuscaglia@gmail.com
 */

export class StateManagerService {
  private state;
  private observableSubject: BehaviorSubject<any>;

  /**
   * @param STATE - the state from the parent service
   */

  constructor(private STATE) {
    this.state = STATE;
    this.observableSubject = new BehaviorSubject(STATE);
  }

  /**
   * @desc returns the observable that contains the state for async operations - it listens for changes
   * @return BehaviorSubject
   */

  getObservable() {
    return this.observableSubject;
  }

  /**
   * @desc returns a property from the state for direct access
   * @param property - the property we want from the state
   * @return any
   */

  getPropertyFromState(property) {
    return this.state[property];
  }

  /**
   * @desc returns an observable that returns a certain property from the state for async operations - it listens for changes
   * @param property - the property we want from the state
   * @return any
   */

  getPropertyFromObservable(property) {
    return this.getObservable().pipe(map((s) => s[property]));
  }

  /**
   * @desc sets a value to a property from the state - if property is not provided the state will reset to null - it triggers an event
   * @param property - the property we want from the state
   * @param value - the value we want to assign to the property
   * @return void
   */

  setObservableValues(value, property?) {
    if (value) {
      this.state[property] = value;
    } else {
      Object.keys(this.state).forEach((k) => {
        this.state[k] = null;
      });
    }
    this.getObservable().next(this.state);
  }
}

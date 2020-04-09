import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface LoaderState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  private spinnerStatusState = new Subject<LoaderState>();

  getSpinnerObservable() {
    return this.spinnerStatusState;
  }

  displaySpinner(value: boolean) {
    this.spinnerStatusState.next({ show: value });
  }
}

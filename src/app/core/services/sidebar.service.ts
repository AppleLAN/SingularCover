import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
  // sidenav state to open or close
  private sidenav: MatSidenav;

  /**
   * @desc sets the sidenav component reference into the state
   * @param sidenav - MatSidenav reference
   * @return void
   */
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  /**
   * @desc calls the open sidenav component reference function
   * @return void
   */
  public open() {
    return this.sidenav.open();
  }

  /**
   * @desc calls the close sidenav component reference function
   * @return void
   */
  public close() {
    return this.sidenav.close();
  }

  /**
   * @desc calls the toggle sidenav component reference function
   * @return void
   */
  public toggle(): void {
    this.sidenav.toggle();
  }
}

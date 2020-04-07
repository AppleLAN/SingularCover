import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  @Input() sidebar: MatSidenav;
  constructor(private sidenavService: SidenavService) {}

  toggle() {
    this.sidenavService.toggle();
  }
}

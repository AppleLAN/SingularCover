import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidenavService } from '@src/app/core/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  links = [
    {
      name: 'Dashboard',
      route: '/dashboard',
    },
    {
      name: 'Select an Insurance',
      route: '/insurance-selector',
    },
  ];

  constructor(private sidenavService: SidenavService) {}

  toggle() {
    this.sidenavService.close();
  }
}

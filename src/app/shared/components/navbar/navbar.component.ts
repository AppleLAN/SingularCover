import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '@src/app/core/services';
import { FavoritesModalComponent } from '../favorites-modal/favorites-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() sidebar: MatSidenav;
  constructor(private sidenavService: SidenavService, public dialog: MatDialog) {}

  toggle() {
    this.sidenavService.toggle();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FavoritesModalComponent, {});
  }
}

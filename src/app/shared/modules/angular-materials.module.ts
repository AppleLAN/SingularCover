import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule],
})
export class AngularMaterialsModule {}

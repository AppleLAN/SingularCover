import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Components from './components';
import * as Modules from './modules';

@NgModule({
  imports: [CommonModule, Modules.AngularMaterialsModule, FlexLayoutModule],
  exports: [
    CommonModule,
    Modules.AngularMaterialsModule,
    FlexLayoutModule,
    Components.CenteredContainerComponent,
    Components.AngularTableComponent,
    Components.SpinnerComponent,
  ],
  providers: [],
  declarations: [Components.CenteredContainerComponent, Components.AngularTableComponent, Components.SpinnerComponent],
})
// shared module for better reusability and implementation of modules
export class SharedModule {}

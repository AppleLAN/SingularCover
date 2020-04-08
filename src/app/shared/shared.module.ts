import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Components from './components';
import * as Modules from './modules';
import * as Services from './services';

@NgModule({
  imports: [Modules.AngularMaterialsModule, FlexLayoutModule],
  exports: [Modules.AngularMaterialsModule, FlexLayoutModule, Components.CenteredContainerComponent, Components.AngularTableComponent],
  providers: [Services.SidenavService],
  declarations: [Components.CenteredContainerComponent, Components.AngularTableComponent],
})
// shared module for better reusability and implementation of modules
export class SharedModule {}

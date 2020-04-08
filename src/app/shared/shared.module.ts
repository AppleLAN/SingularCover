import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Services from './services';
import * as Modules from './modules';
import * as Components from './components';

@NgModule({
  imports: [Modules.AngularMaterialsModule, FlexLayoutModule],
  exports: [
    Modules.AngularMaterialsModule,
    FlexLayoutModule,
    Components.CenteredContainerComponent,
  ],
  providers: [Services.SidenavService],
  declarations: [Components.CenteredContainerComponent],
})
// shared module for better reusability and implementation of modules
export class SharedModule {}

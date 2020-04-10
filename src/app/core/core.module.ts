import { NgModule } from '@angular/core';
import * as Services from './services';

@NgModule({
  imports: [],
  exports: [],
  providers: [Services.SpinnerService, Services.SidenavService, Services.StateManagerService, Services.NotificationService],
  declarations: [],
})
// core module for better readability
export class CoreModule {}

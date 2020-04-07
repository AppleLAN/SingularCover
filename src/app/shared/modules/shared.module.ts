import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Services from '../services';
import { AngularMaterialsModule } from './angular-materials.module';

@NgModule({
  imports: [AngularMaterialsModule, FlexLayoutModule],
  exports: [AngularMaterialsModule, FlexLayoutModule],
  providers: [Services.SidenavService],
})
// shared module for better reusability and implementation of modules
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import * as Components from './components';
import * as Modules from './modules';
import * as Services from './services';

@NgModule({
  imports: [CommonModule, Modules.AngularMaterialsModule, FlexLayoutModule, FormsModule],
  exports: [
    CommonModule,
    Modules.AngularMaterialsModule,
    FlexLayoutModule,
    Components.CenteredContainerComponent,
    Components.InsuranceTableComponent,
    Components.KindsSelectorComponent,
    Components.TableFilterComponent,
    Components.TableFilterContainerComponent,
    Components.NotificationComponent,
    FormsModule,
  ],
  providers: [Services.FavoriteService, Services.UtilitiesService],
  entryComponents: [Components.FavoritesModalComponent],
  declarations: [
    Components.CenteredContainerComponent,
    Components.InsuranceTableComponent,
    Components.FavoritesModalComponent,
    Components.KindsSelectorComponent,
    Components.TableFilterComponent,
    Components.TableFilterContainerComponent,
    Components.NotificationComponent,
  ],
})
// shared module for better reusability and implementation of modules
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Components from './components';
import * as Modules from './modules';
import * as Services from './services';
import { FavoritesModalComponent } from './components/favorites-modal/favorites-modal.component';

@NgModule({
  imports: [CommonModule, Modules.AngularMaterialsModule, FlexLayoutModule],
  exports: [
    CommonModule,
    Modules.AngularMaterialsModule,
    FlexLayoutModule,
    Components.CenteredContainerComponent,
    Components.AngularTableComponent,
  ],
  providers: [Services.FavoriteService, Services.UtilitiesService],
  entryComponents: [Components.FavoritesModalComponent],
  declarations: [Components.CenteredContainerComponent, Components.AngularTableComponent, FavoritesModalComponent],
})
// shared module for better reusability and implementation of modules
export class SharedModule {}

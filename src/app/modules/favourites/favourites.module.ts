import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@src/app/shared/shared.module';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [CommonModule, SharedModule, FavouritesRoutingModule],
})
export class FavouritesModule {}

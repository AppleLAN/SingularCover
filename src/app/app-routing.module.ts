import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'insurance-selector',
    loadChildren: () =>
      import('./modules/insurance-selector/insurance-selector.module').then(
        (m) => m.InsuranceSelectorModule
      ),
  },
  {
    path: 'favourites',
    loadChildren: () =>
      import('./modules/favourites/favourites.module').then(
        (m) => m.FavouritesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

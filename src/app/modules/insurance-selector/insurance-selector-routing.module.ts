import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceSelectorComponent } from './insurance-selector.component';

const routes: Routes = [
  {
    path: '',
    component: InsuranceSelectorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceSelectorRoutingModule {}

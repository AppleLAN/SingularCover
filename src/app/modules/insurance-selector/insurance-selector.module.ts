import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { InsuranceSelectorRoutingModule } from './insurance-selector-routing.module';
import { InsuranceSelectorComponent } from './insurance-selector.component';

@NgModule({
  declarations: [InsuranceSelectorComponent],
  imports: [CommonModule, SharedModule, InsuranceSelectorRoutingModule],
})
export class InsuranceSelectorModule {}

import { Component } from '@angular/core';
import { Insurance } from '@src/app/modules/insurance-selector/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FavoriteService } from '../../services';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-favorites-modal',
  templateUrl: './favorites-modal.component.html',
  styleUrls: ['./favorites-modal.component.sass'],
})
export class FavoritesModalComponent {
  favorites$: Observable<Insurance[]>;

  constructor(private favoriteService: FavoriteService, private utilitiesService: UtilitiesService) {
    this.favorites$ = this.favoriteService.getFavoriteFromDataBase().pipe(
      map((insurances) => {
        return this.utilitiesService.formatInsurances(insurances);
      })
    );
  }
}

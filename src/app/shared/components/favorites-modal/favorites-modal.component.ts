import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Insurance } from '../../models/insurance';
import { FavoriteService } from '../../services';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-favorites-modal',
  templateUrl: './favorites-modal.component.html',
  styleUrls: ['./favorites-modal.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

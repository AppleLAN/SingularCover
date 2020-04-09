import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-centered-container',
  templateUrl: './centered-container.component.html',
  styleUrls: ['./centered-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenteredContainerComponent {
  constructor() {}
}

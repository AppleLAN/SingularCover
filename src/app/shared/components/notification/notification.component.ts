import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Notification } from '../../models';

@Component({
  selector: 'app-notification',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <p>{{ message }}</p>
    </div>
  `,
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  message: string;
  success: boolean;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Notification) {
    this.message = this.data.message;
    this.success = this.data.success;
  }
}

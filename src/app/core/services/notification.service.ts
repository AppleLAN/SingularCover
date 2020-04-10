import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../../shared/components/notification/notification.component';

@Injectable()
export class NotificationService {
  private duration = 5000;
  constructor(private snackBar: MatSnackBar) {}

  showNotification(message, success) {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: this.duration,
      data: { message, success },
      panelClass: [success === 'info' ? 'info-snackbar' : success ? 'success-snackbar' : 'error-snackbar'],
    });
  }
}

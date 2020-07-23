import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NotificationType } from '../models';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  message$ = new BehaviorSubject<string | string[]>(null);
  activeType$ = new BehaviorSubject<NotificationType>(null);

  success(message: string): void {
    this.activeType$.next(NotificationType.Success);
    this.message$.next(message);
  }

  error(errors: string[]): void {
    this.activeType$.next(NotificationType.Error);
    this.message$.next(errors);
  }

  reset(): void {
    this.activeType$.next(null);
    this.message$.next(null);
  }
}

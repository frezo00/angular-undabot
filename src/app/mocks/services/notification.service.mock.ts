import { BehaviorSubject } from 'rxjs';

import { NotificationType } from '../../models';

export class NotificationServiceMock {
  message$ = new BehaviorSubject<string | string[]>(null);
  activeType$ = new BehaviorSubject<NotificationType>(null);
  success(_message: string): void {}
  error(_message: string): void {}
  reset(): void {}
}

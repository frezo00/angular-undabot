import { BehaviorSubject } from 'rxjs';

import { NotificationType } from '../models';

export class NotificationServiceMock {
  message$: BehaviorSubject<string | string[]>;
  activeType$: BehaviorSubject<NotificationType>;
  success(_message: string): void {}
  error(_message: string): void {}
  reset(): void {}
}

import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NotificationType } from '../../models';

// tslint:disable: component-class-suffix
@Component({
  selector: 'app-notification',
  template: ``
})
export class NotificationComponentMock {
  message$: BehaviorSubject<string | string[]>;
  currentType$: BehaviorSubject<NotificationType>;
  type = NotificationType;
  onClose(): void {}
}

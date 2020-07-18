import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { NotificationType } from '../../models';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  message$: BehaviorSubject<string | string[]>;
  currentType$: BehaviorSubject<NotificationType>;

  type = NotificationType;

  constructor(private _notificationService: NotificationService) {}

  ngOnInit(): void {
    this.currentType$ = this._notificationService.activeType$;
    this.message$ = this._notificationService.message$;
  }
}

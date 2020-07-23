import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { MessageRequest, MessageResponse } from '../models';
import { NotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private _http: HttpClient, private _notificationService: NotificationService) {}

  sendMessage$(payload: MessageRequest): Observable<MessageResponse> {
    return this._http
      .post<MessageResponse>(`${environment.api}/contact`, payload)
      .pipe(tap(response => this._notificationService.success(response.message)));
  }
}

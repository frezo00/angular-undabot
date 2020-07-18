import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize, retry } from 'rxjs/operators';

import { MessageError } from '../models';
import { LoaderService } from './loader.service';
import { NotificationService } from './notification.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private _loaderService: LoaderService, private _notificationService: NotificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._loaderService.show();
    this._notificationService.reset();

    return next.handle(request).pipe(
      delay(5000),
      finalize(() => this._loaderService.hide()),
      retry(1),
      catchError((error: MessageError) => {
        this._loaderService.hide();
        this._notificationService.error(error.error.errors);
        return throwError(error);
      })
    );
  }
}

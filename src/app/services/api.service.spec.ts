import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../environments/environment';
import { NotificationServiceMock } from '../mocks';
import { MessageRequest, MessageResponse } from '../models';
import { ApiService } from './api.service';
import { NotificationService } from './notification.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let notificationService: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService, { provide: NotificationService, useClass: NotificationServiceMock }]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
    notificationService = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('on #sendMessage$(payload)', () => {
    it('should do HTTP POST call with correct parameters and response', () => {
      const successNotificationSpy = spyOn(notificationService, 'success');

      const payload: MessageRequest = {
        email: 'test@mail.com',
        message: 'Test message that needs to have 30 characters'
      };

      const expectedResponse: MessageResponse = {
        message: 'Test response message!'
      };

      service.sendMessage$(payload).subscribe(response => {
        expect(response).toEqual(expectedResponse);
        expect(successNotificationSpy).toHaveBeenCalledTimes(1);
        expect(successNotificationSpy).toHaveBeenCalledWith(expectedResponse.message);
      });

      const req = httpMock.expectOne(`${environment.api}/contact`);

      expect(req.request.method).toBe('POST');

      req.flush(expectedResponse);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});

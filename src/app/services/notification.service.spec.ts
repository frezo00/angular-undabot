import { TestBed } from '@angular/core/testing';

import { NotificationType } from '../models';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let messageNextSpy: jasmine.Spy;
  let activeTypeNext: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
    messageNextSpy = spyOn(service.message$, 'next');
    activeTypeNext = spyOn(service.activeType$, 'next');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('on #success(message) call', () => {
    it('should call the `next()` method for both #activeType$ and #message$ BehaviourSubjects with correct parameters', () => {
      const message = 'Test';

      service.success(message);

      expect(activeTypeNext).toHaveBeenCalledTimes(1);
      expect(activeTypeNext).toHaveBeenCalledWith(NotificationType.Success);
      expect(messageNextSpy).toHaveBeenCalledTimes(1);
      expect(messageNextSpy).toHaveBeenCalledWith(message);
    });
  });

  describe('on #error(errors) call', () => {
    it('should call the `next()` method for both #activeType$ and #message$ BehaviourSubjects with correct parameters', () => {
      const errors = ['Error 1', 'Error 2'];

      service.error(errors);

      expect(activeTypeNext).toHaveBeenCalledTimes(1);
      expect(activeTypeNext).toHaveBeenCalledWith(NotificationType.Error);
      expect(messageNextSpy).toHaveBeenCalledTimes(1);
      expect(messageNextSpy).toHaveBeenCalledWith(errors);
    });
  });

  describe('on #reset() call', () => {
    it('should call the `next()` method for both #activeType$ and #message$ BehaviourSubjects with correct parameters', () => {
      service.reset();

      expect(activeTypeNext).toHaveBeenCalledTimes(1);
      expect(activeTypeNext).toHaveBeenCalledWith(null);
      expect(messageNextSpy).toHaveBeenCalledTimes(1);
      expect(messageNextSpy).toHaveBeenCalledWith(null);
    });
  });
});

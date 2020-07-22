import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NotificationServiceMock } from '../../mocks';
import { NotificationType } from '../../models';
import { NotificationService } from '../../services/notification.service';
import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;
  let notificationService: NotificationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationComponent],
      providers: [{ provide: NotificationService, useClass: NotificationServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    notificationService = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set #message$ and #currentType$ to null (default)', () => {
    expect(component.message$.value).toBeNull('message');
    expect(component.currentType$.value).toBeNull('type');
  });

  describe('when message and type exist', () => {
    it('should set #currentType$ to `Success` and display the #message$', () => {
      component.currentType$.next(NotificationType.Success);
      component.message$.next('Test');

      fixture.detectChanges();

      const successElement: HTMLElement = fixture.debugElement.query(By.css('.notification--success')).nativeElement;

      expect(successElement).toBeTruthy();
      expect(successElement.querySelector('.notification__message').textContent).toBe('Test');
    });

    it('should set #currentType$ to `Error` and display list of the #message$', () => {
      const expectedErrors = ['Error 1', 'Error 2'];

      component.currentType$.next(NotificationType.Error);
      component.message$.next(expectedErrors);

      fixture.detectChanges();

      const errorElement: HTMLElement = fixture.debugElement.query(By.css('.notification--error')).nativeElement;
      const errorMessages = errorElement.querySelectorAll('.notification__message');

      expect(errorElement).toBeTruthy();
      errorMessages.forEach((element: HTMLElement, i: number) => expect(element.textContent).toBe(expectedErrors[i]));
    });
  });

  describe('on notification close', () => {
    it('should call #reset() method from Notification service and hide notification element', () => {
      const resetSpy = spyOn(notificationService, 'reset');

      component.onClose();

      const notificationElement: DebugElement = fixture.debugElement.query(By.css('.notification'));

      expect(notificationElement).toBeFalsy();
      expect(resetSpy).toHaveBeenCalledTimes(1);
    });
  });
});

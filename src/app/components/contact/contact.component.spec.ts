import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import {
  ApiServiceMock,
  FormControlErrorComponentMock,
  LoaderComponentMock,
  NotificationComponentMock
} from '../../mocks';
import { MessageRequest } from '../../models';
import { ApiService } from '../../services/api.service';
import { ContactComponent } from './contact.component';
import { throwError } from 'rxjs';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent, FormControlErrorComponentMock, LoaderComponentMock, NotificationComponentMock],
      providers: [FormBuilder, { provide: ApiService, useClass: ApiServiceMock }],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on init', () => {
    it('should initialize form', () => {
      expect(component.email).toBeDefined('Defined email');
      expect(component.message).toBeDefined('Defined message');
      expect(component.form).toBeDefined('Defined form');
    });

    it('should set default required validators for form controls', () => {
      expect(component.email.hasError('required')).toBeTruthy('Required email');
      expect(component.message.hasError('required')).toBeTruthy('Required message');
    });

    it('should set validators for email', () => {
      component.email.setValue('not-valid-email');
      expect(component.email.hasError('email')).toBeTruthy();

      component.email.setValue('valid@email.com');
      expect(component.email.hasError('email')).toBeFalsy();
      expect(component.email.valid).toBeTrue();
    });

    it('should set validators for message', () => {
      component.message.setValue('Short message');
      expect(component.message.hasError('minlength')).toBeTruthy('Min length validator');

      component.message.setValue('This is some valid message with enough characters.');
      expect(component.message.hasError('minlength')).toBeFalsy('Min length validator');
      expect(component.message.hasError('maxlength')).toBeFalsy('Max length validator');
      expect(component.message.valid).toBeTrue();

      component.message.setValue(
        'Ut porttitor urna a eleifend viverra. Nullam congue faucibus odio, ut euismod lacus accumsan sit amet. \
        Etiam finibus urna nunc, at semper magna bibendum non. Integer quis dui ut magna fringilla efficitur dapibus non dui. \
        Phasellus ut tortor hendrerit, ultrices nisi fringilla, dictum nisl. Ut pulvinar libero non nulla iaculis aliquam. \
        Morbi sagittis nisi est, id convallis arcu interdum vitae. Etiam porttitor dolor neque, sed pretium arcu semper ut. \
        Cras consectetur congue neque eu facilisis. Nam in dapibus dui. Cras facilisis vulputate ipsum in sagittis. Sed non congue augue. \
        Cras a nulla at erat dapibus rhoncus at varius dolor. Nam gravida semper ante, quis vestibulum neque fringilla at. \
        Ut porttitor urna a eleifend viverra. Nullam congue faucibus odio, ut euismod lacus accumsan sit amet. \
        Etiam finibus urna nunc, at semper magna bibendum non. Integer quis dui ut magna fringilla efficitur dapibus non dui. \
        Phasellus ut tortor hendrerit, ultrices nisi fringilla, dictum nisl. Ut pulvinar libero non nulla iaculis aliquam.'
      );
      expect(component.message.hasError('maxlength')).toBeTruthy('Max length validator');
    });
  });

  describe('on form submit', () => {
    describe('when form is VALID', () => {
      let fakeData: MessageRequest;

      beforeEach(() => {
        fakeData = {
          email: 'valid@email.com',
          message: 'This is some valid message with enough characters.'
        };

        component.email.setValue(fakeData.email);
        component.message.setValue(fakeData.message);
      });

      it('should call #sendMessage$ method from ApiService and reset form on success', () => {
        const sendMessageSpy = spyOn(apiService, 'sendMessage$').and.callThrough();

        component.onSubmit();

        expect(sendMessageSpy).toHaveBeenCalledTimes(1);
        expect(sendMessageSpy).toHaveBeenCalledWith(fakeData);

        // Check if form is reset
        expect(component.form.untouched).toBeTrue();
      });

      it('should call #sendMessage$ method from ApiService and mark controls as touched on error', () => {
        const sendMessageSpy = spyOn(apiService, 'sendMessage$').and.returnValue(throwError('Error'));

        component.onSubmit();

        expect(sendMessageSpy).toHaveBeenCalledTimes(1);
        expect(sendMessageSpy).toHaveBeenCalledWith(fakeData);

        // Check if controls are marked as touched
        expect(component.email.touched).toBeTrue();
        expect(component.message.touched).toBeTrue();
      });
    });

    describe('when form is INVALID', () => {
      it('should update controls validity and mark them as touched', () => {
        component.email.setValue('valid@email.com');
        component.message.setValue('Too short message.');
        component.onSubmit();

        expect(component.form.valid).toBeFalse();
        expect(component.email.touched).toBeTruthy('Email touched');
        expect(component.message.touched).toBeTruthy('Message touched');
        expect(component.message.valid).toBeFalsy('Message invalid');
      });
    });
  });
});

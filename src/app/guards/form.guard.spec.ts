import { TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';

import { ContactComponentMock } from '../mocks';
import { ContactComponent } from '../pages/contact/contact.component';
import { FormGuard } from './form.guard';

describe('FormGuard', () => {
  let guard: FormGuard;
  let component: ContactComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormGuard);
    component = TestBed.createComponent(ContactComponentMock).componentInstance as ContactComponent;
    component.form = new FormGroup({});
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('can deactivate', () => {
    describe('when component`s form is DIRTY', () => {
      beforeEach(() => {
        component.form.markAsDirty();
      });

      it('should return false if the user declines the confirm window', () => {
        const confirmSpy = spyOn(window, 'confirm').and.returnValue(false);

        expect(guard.canDeactivate(component)).toBeFalse();
        expect(confirmSpy).toHaveBeenCalledTimes(1);
      });

      it('should return true if the user confirms the confirm window', () => {
        const confirmSpy = spyOn(window, 'confirm').and.returnValue(true);

        expect(guard.canDeactivate(component)).toBeTrue();
        expect(confirmSpy).toHaveBeenCalledTimes(1);
      });
    });

    describe('when component`s form is PRISTINE', () => {
      it('should return true', () => {
        expect(guard.canDeactivate(component)).toBeTrue();
      });
    });
  });
});

import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { ContactComponent } from '../components/contact/contact.component';

@Injectable({ providedIn: 'root' })
export class FormGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(component: ContactComponent): boolean {
    if (component.form.dirty) {
      return confirm('Are you sure you want to discard all changes?');
    }
    return true;
  }
}

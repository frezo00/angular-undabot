import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// tslint:disable: component-class-suffix
@Component({
  selector: 'app-loader',
  template: ``
})
export class LoaderComponentMock {
  isLoading$: BehaviorSubject<boolean>;
}

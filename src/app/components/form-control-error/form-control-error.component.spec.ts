import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlErrorComponent } from './form-control-error.component';

// NOTE: This is a presentational component with hardcoded messages.
// There is no need for unit tests in this case as the hardcoded messages can often change.
describe('FormControlErrorComponent', () => {
  let component: FormControlErrorComponent;
  let fixture: ComponentFixture<FormControlErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormControlErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  // tslint:disable-next-line: typedef
  function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.componentInstance;

    return { fixture, component };
  }

  it('should create the component', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Hello Undabot!'`, () => {
    const { component } = setup();
    expect(component.title).toEqual('Hello Undabot!');
  });

  it('should render title', () => {
    const { fixture } = setup();
    const compiled: HTMLElement = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Hello Undabot!');
  });
});

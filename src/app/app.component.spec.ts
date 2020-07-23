import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
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

  it('should have links defined and rendered', () => {
    const { fixture, component } = setup();

    fixture.detectChanges();

    const navigationAnchorElements: HTMLAnchorElement[] = fixture.debugElement
      .queryAll(By.css('a'))
      .map(el => el.nativeElement);

    expect(component.links).toBeDefined();
    expect(component.links.length).toEqual(navigationAnchorElements.length);

    component.links.forEach((link, i) => expect(link.title).toEqual(navigationAnchorElements[i].textContent.trim()));
  });
});

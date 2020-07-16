import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SafePipeMock } from '../../mocks';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SafePipeMock]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on init', () => {
    it('should define properties', () => {
      expect(component.title).toBeDefined();
      expect(component.description).toBeDefined();
      expect(component.image).toBeDefined();
      expect(component.author).toBeDefined();
      expect(component.source).toBeDefined();
    });

    it('should render defined properties', () => {
      const titleContent: HTMLHeadingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
      const descriptionContent: HTMLParagraphElement = fixture.debugElement.query(By.css('p')).nativeElement;
      const imageContant: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;

      expect(titleContent.textContent.trim()).toEqual(component.title);
      expect(descriptionContent.textContent.trim()).toEqual(component.description);
      expect(imageContant.alt.trim()).toEqual(component.image.name);
    });
  });
});

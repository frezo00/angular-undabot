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
      expect(component.title).toBeDefined('Title');
      expect(component.description).toBeDefined('Description');
      expect(component.image).toBeDefined('Image');
      expect(component.author).toBeDefined('Author');
      expect(component.source).toBeDefined('Source');
    });

    it('should render defined properties', () => {
      const titleContent: HTMLHeadingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
      const descriptionContent: HTMLParagraphElement = fixture.debugElement.query(By.css('p')).nativeElement;
      const imageContant: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;

      expect(titleContent.textContent.trim()).toEqual(component.title, 'Title');
      expect(descriptionContent.textContent.trim()).toEqual(component.description, 'Description');
      expect(imageContant.alt.trim()).toEqual(component.image.name, 'Image name');
    });
  });
});

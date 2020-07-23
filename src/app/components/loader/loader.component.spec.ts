import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoaderServiceMock } from '../../mocks';
import { LoaderService } from '../../services/loader.service';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loaderService: LoaderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      providers: [{ provide: LoaderService, useClass: LoaderServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    loaderService = TestBed.inject(LoaderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set #isLoading$ to false (default)', () => {
    expect(component.isLoading$.value).toBeFalse();
  });

  it('should set #isLoading$ to true and display loader', () => {
    component.isLoading$.next(true);

    fixture.detectChanges();

    const loaderElement: HTMLElement = fixture.debugElement.query(By.css('.loader')).nativeElement;

    expect(loaderElement).toBeTruthy();
    expect(component.isLoading$.value).toBeTrue();
  });
});

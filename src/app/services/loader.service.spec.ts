import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;
  let isLoadingNext: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
    isLoadingNext = spyOn(service.isLoading$, 'next');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('on #show() call', () => {
    it('should call the `next()` method of the #isLoading$ BehaviourSubject with `true`', () => {
      service.show();

      expect(isLoadingNext).toHaveBeenCalledTimes(1);
      expect(isLoadingNext).toHaveBeenCalledWith(true);
    });
  });

  describe('on #hide() call', () => {
    it('should call the `next()` method of the #isLoading$ BehaviourSubject with `false`', () => {
      service.hide();

      expect(isLoadingNext).toHaveBeenCalledTimes(1);
      expect(isLoadingNext).toHaveBeenCalledWith(false);
    });
  });
});

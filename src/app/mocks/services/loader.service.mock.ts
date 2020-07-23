import { BehaviorSubject } from 'rxjs';

export class LoaderServiceMock {
  isLoading$ = new BehaviorSubject<boolean>(false);
  show(): void {}
  hide(): void {}
}

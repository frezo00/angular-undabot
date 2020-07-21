import { BehaviorSubject } from 'rxjs';

export class LoaderServiceMock {
  isLoading$: BehaviorSubject<boolean>;
  show(): void {}
  hide(): void {}
}

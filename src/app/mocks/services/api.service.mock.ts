import { Observable, of } from 'rxjs';

import { MessageRequest, MessageResponse } from '../../models';

export class ApiServiceMock {
  sendMessage$(_payload: MessageRequest): Observable<MessageResponse> {
    return of({ message: 'Test response message!' });
  }
}

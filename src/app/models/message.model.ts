import { HttpErrorResponse } from '@angular/common/http';

export type MessageRequest = {
  email: string;
  message: string;
};

export type MessageResponse = {
  message: string;
};

export class MessageError extends HttpErrorResponse {
  readonly error: { errors: string[] };
}

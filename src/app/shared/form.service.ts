import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  submissionError: string
  errorMessages = {
    default: 'field cannot be empty!',
    email: 'valid email must be provided',
    submission: 'Form Submission Failed! Verify email is valid'
  }
  constructor() { }

  getErrorMessage(type: any = null) {
    if(type) {
    return this.errorMessages[type];
    }
    return this.errorMessages.default;
  }

  resetSubmissionError() {
    this.submissionError = null;
  }
}

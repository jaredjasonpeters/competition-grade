import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required])

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(e) {
    e.preventDefault();
    console.log('SUBMITTED FORM', e.target);
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email'
    }
  
    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }
  }
  getMessageErrorMessage() {
    if (this.message.hasError('required')) {
      return 'You must enter a message'
    }
  }
  

}

import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form = {
    name: '',
    email: '',
    message: ''
  }
  // email = new FormControl('', [Validators.required, Validators.email]);
  // message = new FormControl('', [Validators.required])

  constructor() { }

  ngOnInit(): void {
    
  }

  submitForm(form) {
   
    console.log('SUBMITTED FORM', form);
    console.log('FORMINFORMATION', form.name, form.email, form.message)
  }

  // getEmailErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter an email'
  //   }
  
  //   if (this.email.hasError('email')) {
  //     return 'Not a valid email';
  //   }
  // }
  // getMessageErrorMessage() {
  //   if (this.message.hasError('required')) {
  //     return 'You must enter a message'
  //   }
  // }

  getEmailErrorMessage() {
    
      return 'You must enter a valid email'
  }
  getMessageErrorMessage() {
   
      return 'You must enter a message'
    
  }
  
 

}

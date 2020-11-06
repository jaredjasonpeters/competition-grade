import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  submissionError: string; 
  // email = new FormControl('', [Validators.required, Validators.email]);
  // message = new FormControl('', [Validators.required])

  constructor(private http: HttpClient, private router: Router, private formService: FormService) { }

  ngOnInit(): void {
    
  }

  submitForm(form) {
   
    console.log('SUBMITTED FORM', form.value);
  


    this.http.post("https://formspree.io/f/xdopzbvz", form.value).subscribe((result: {ok: boolean, next: string}) => {
      console.log('RESULT', result);
      if(result.ok) {
        let urlArray = result.next.split('/')
        console.log('URLARRAY', urlArray)
        let paramsArray = urlArray.splice(3);
        let redirectUrl = paramsArray.join('/');
     
        this.router.navigateByUrl(redirectUrl);
      }
    }, (error) => {
      console.log('ERROR', error);
      this.submissionError = error.error.error;
      console.log('SUBMISSIONERROR', this.submissionError)

    })

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

  getSubmissionErrorMessage() {
    return 'Form Submission Failed! Check email before resubmitting'
  }

  getEmailErrorMessage() {
    
      return 'You must enter a valid email!'
  }
  getMessageErrorMessage() {
     return 'This field cannot be empty!'
     
    
  }
  
 

}

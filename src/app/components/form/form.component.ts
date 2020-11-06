import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy{
@Input() title;
@Input() fieldApperance;
  constructor(public formService: FormService, private http: HttpClient, private router: Router) { }

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
        this.formService.resetSubmissionError();
      }
    }, (error) => {
      console.log('ERROR', error);
      this.formService.submissionError = error.error.error;
      console.log('SUBMISSIONERROR', this.formService.submissionError)

    })

  }

  ngOnDestroy(): void {
    this.formService.resetSubmissionError();
  }
}

import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/shared/form.service';
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submissionError: string;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // message = new FormControl('', [Validators.required])

  constructor(
    public layoutService: LayoutService,
    private http: HttpClient,
    private router: Router,
    private formService: FormService
  ) {}

  ngOnInit(): void {}

  submitForm(form) {
    console.log('SUBMITTED FORM', form.value);

    this.http.post('https://formspree.io/f/xdopzbvz', form.value).subscribe(
      (result: { ok: boolean; next: string }) => {
        console.log('RESULT', result);
        if (result.ok) {
          let urlArray = result.next.split('/');
          console.log('URLARRAY', urlArray);
          let paramsArray = urlArray.splice(3);
          let redirectUrl = paramsArray.join('/');

          this.router.navigateByUrl(redirectUrl);
        }
      },
      error => {
        console.log('ERROR', error);
        this.submissionError = error.error.error;
        console.log('SUBMISSIONERROR', this.submissionError);
      }
    );
  }

  getSubmissionErrorMessage() {
    return this.formService.getErrorMessage('submission');
  }

  getEmailErrorMessage() {
    return this.formService.getErrorMessage('email');
  }
  getMessageErrorMessage() {
    return this.formService.getErrorMessage();
  }
}

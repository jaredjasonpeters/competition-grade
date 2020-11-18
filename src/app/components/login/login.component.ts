import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { distributor_id, distributor_password } = form.value;
    this.authService.login(distributor_id, distributor_password).subscribe(
      (authResponse) => {},
      (error) => {
        this.errorMessage = error;
      }
    );

    form.reset();
  }
}

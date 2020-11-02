import { Component, OnInit } from '@angular/core';
import { DistributorsService } from 'src/app/shared/distributors.service';
import { AuthService } from 'src/app/shared/auth.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  distributorsLength: number;
  footerLength: number;
  distributorLoggedIn: boolean;

  constructor(private distributorsService: DistributorsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.distributorsLength = this.distributorsService.getLength();
    this.footerLength = this.distributorsLength + 7;
    this.distributorLoggedIn = this.authService.loggedIn;
  }
}

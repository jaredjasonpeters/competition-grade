import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submissionError: string;

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}
}

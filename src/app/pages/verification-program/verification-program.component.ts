import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-program',
  templateUrl: './verification-program.component.html',
  styleUrls: ['./verification-program.component.css'],
})
export class VerificationProgramComponent implements OnInit {
  kbgVarieties = [
    'Sombrero',
    'Fielder (SPTR 2959)',
    'Heidi (A00-2882)',
    'Jackrabbit',
    'Granite',
    'Mercury',
    'SR 2100',
    'SR 2150',
    'SRX 2758',
  ];
  tfVarieties = [
    'Crossfire 4',
    'Fayette',
    'Standout',
    'Nightcrawler',
    'Turfway',
    'Rhizing Moon',
    'Firewall',
    'Houndog 8',
  ];
  prgVarieties = [
    'Karma',
    'Bandalore',
    'Banfield',
    'Aspire',
    'Thrive',
    'Stamina',
    'Wicked',
    'Fiesta 4',
    'Allstar Fore',
    'Fiesta Cinco',
  ];
  constructor() {}

  ngOnInit(): void {}
}

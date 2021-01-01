import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-program',
  templateUrl: './verification-program.component.html',
  styleUrls: ['./verification-program.component.css'],
})
export class VerificationProgramComponent implements OnInit {
  kbgVarieties = [
    ['Sombrero', 'https://www.dlfpickseed.com/usa'],
    ['Fielder (SPTR 2959)', 'https://www.dlfpickseed.com/usa'],
    ['Heidi (A00-2882)', 'https://www.dlfpickseed.com/usa'],
    ['Jackrabbit', 'https://www.dlfpickseed.com/usa'],
    ['Granite', 'https://www.dlfpickseed.com/usa'],
    ['Mercury', 'https://www.dlfpickseed.com/usa'],
    ['SR 2100', 'https://www.dlfpickseed.com/usa'],
    ['SR 2150', 'https://www.dlfpickseed.com/usa'],
    ['SRX 2758', 'https://www.dlfpickseed.com/usa'],
  ];
  tfVarieties = [
    ['Crossfire 4', 'https://www.dlfpickseed.com/usa'],
    ['Fayette', 'https://www.dlfpickseed.com/usa'],
    ['Standout', 'https://www.dlfpickseed.com/usa'],
    ['Nightcrawler', 'https://www.dlfpickseed.com/usa'],
    ['Turfway', 'https://www.dlfpickseed.com/usa'],
    ['Rhizing Moon', 'https://www.dlfpickseed.com/usa'],
    ['Firewall', 'https://www.dlfpickseed.com/usa'],
    ['Houndog 8', 'https://www.dlfpickseed.com/usa'],
  ];
  prgVarieties = [
    ['Karma', 'https://www.dlfpickseed.com/usa'],
    ['Bandalore', 'https://www.dlfpickseed.com/usa'],
    ['Banfield', 'https://www.dlfpickseed.com/usa'],
    ['Aspire', 'https://www.dlfpickseed.com/usa'],
    ['Thrive', 'https://www.dlfpickseed.com/usa'],
    ['Stamina', 'https://www.dlfpickseed.com/usa'],
    ['Wicked', 'https://www.dlfpickseed.com/usa'],
    ['Fiesta 4', 'https://www.dlfpickseed.com/usa'],
    ['Allstar Fore', 'https://www.dlfpickseed.com/usa'],
    ['Fiesta Cinco', 'https://www.dlfpickseed.com/usa'],
  ];
  constructor() {}

  ngOnInit(): void {}
}

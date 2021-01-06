import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-verification-program',
  templateUrl: './verification-program.component.html',
  styleUrls: ['./verification-program.component.css'],
})
export class VerificationProgramComponent implements OnInit {
  kbgVarieties = [
    [
      'Sombrero',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Sombrero_ts.pdf',
    ],
    [
      'Fielder',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Fielder_ts.pdf',
    ],
    [
      'Heidi',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Heidi_ts.pdf',
    ],
    [
      'Jackrabbit',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Jackrabbit_ts.pdf',
    ],
    [
      'Granite',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Granite_ts.pdf',
    ],
    [
      'Mercury',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Mercury_ts.pdf',
    ],
    [
      'SR 2100',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/',
    ],
    [
      'SR 2150',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/',
    ],
    [
      'SRX 2758',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/',
    ],
  ];
  tfVarieties = [
    [
      'Crossfire 4',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Crossfire_4_ts.pdf',
    ],
    [
      'Fayette',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Fayette_ts.pdf',
    ],
    [
      'Standout',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Standout_ts.pdf',
    ],
    [
      'Nightcrawler',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Nightcrawler_ts.pdf',
    ],
    [
      'Turfway',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Turfway_ts.pdf',
    ],
    [
      'Rhizing Moon',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Rhizing_Moon_ts.pdf',
    ],
    [
      'Firewall',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Firewall_ts.pdf',
    ],
    [
      'Houndog 8',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Houndog_8_ts.pdf',
    ],
  ];
  prgVarieties = [
    [
      'Karma',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Karma_ts.pdf',
    ],
    [
      'Bandalore',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Bandalore_ts.pdf',
    ],
    [
      'Banfield',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Banfield_ts.pdf',
    ],
    [
      'Aspire',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Aspire_ts.pdf',
    ],
    [
      'Thrive',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Thrive_ts.pdf',
    ],
    [
      'Stamina',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Stamina_ts.pdf',
    ],
    [
      'Wicked',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Wicked_ts.pdf',
    ],
    [
      'Fiesta 4',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Fiesta_4_ts.pdf',
    ],
    [
      'Allstar Fore',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Allstar_Fore_ts.pdf',
    ],
    [
      'Fiesta Cinco',
      'https://www.dlfpickseed.com/Files/Files/DLF_Pickseed_USA/DLF_Pickseed_Tech_Sheets/Turf_Seed/Variety/Fiesta_Cinco_ts.pdf',
    ],
  ];
  @ViewChild('logoViewer', { static: true })
  logoViewer: ElementRef<HTMLDivElement>;
  needsPageHeader: boolean = true;
  pageHeaderTitle: string = 'MAKING THE TEAM >> THE VARIETY SELECTION PROCESS';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  showLogo(event: MouseEvent) {
    let target = event.target['dataset']['logo'];
    console.log('TARGET', target);
    if (target) {
      this.renderer.setStyle(
        this.logoViewer.nativeElement,
        'background-image',
        `url('assets/${target}_logo.jpg')`
      );
    }
  }

  hideLogo(event: MouseEvent) {
    this.renderer.setStyle(
      this.logoViewer.nativeElement,
      'background-image',
      ''
    );
  }

  formatForDataLogo(variety) {
    if (variety) {
      let name = variety[0].toLowerCase();
      let formatted_name = name.replace(' ', '_');
      return formatted_name;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.css'],
})
export class MenuRightComponent implements OnInit {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/OmNwBlr0Kkk'
    );
  }
}

import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var twttr;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Competition Grade Seed');
  }

  ngOnInit(): void {
    twttr.widgets.load();
  }
}

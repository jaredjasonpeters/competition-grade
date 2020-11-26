import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  page;
  constructor(private titleService: Title, private route: ActivatedRoute) {
    titleService.setTitle('Competition Grade Seed');
  }

  ngOnInit(): void {
    this.page = this.route.snapshot.url.join();
    console.log('PAGE', this.page);
  }
}

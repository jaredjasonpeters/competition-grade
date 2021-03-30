import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  disableProducts: boolean;

  constructor(
    public layoutService: LayoutService,
    private renderer: Renderer2
  ) {}
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('navigation', { static: true }) navigation: ElementRef;

  ngOnInit(): void {
    const nav = this.navigation.nativeElement;
    const offset = nav.offsetTop;

    this.renderer.listen(window, 'scroll', () => {
      if (window.pageYOffset <= offset - 20) {
        this.renderer.removeClass(nav, 'sticky');
      } else {
        this.renderer.addClass(nav, 'sticky');
      }
    });
  }
}

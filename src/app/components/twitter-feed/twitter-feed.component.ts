import { DOCUMENT } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css'],
})
export class TwitterFeedComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    function loadTwitterStream(renderer, doc): void {
      const head = doc.getElementsByTagName('head')[0];

      const twitterScript = renderer.createElement('script');

      renderer.setAttribute(twitterScript, 'async', 'true');
      renderer.setAttribute(
        twitterScript,
        'src',
        'https://platform.twitter.com/widgets.js'
      );
      renderer.setAttribute(twitterScript, 'charset', 'utf-8');
      renderer.appendChild(head, twitterScript);
    }
    loadTwitterStream(this.renderer, this.doc);
  }
}

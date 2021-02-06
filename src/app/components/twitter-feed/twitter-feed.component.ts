import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css'],
})
export class TwitterFeedComponent implements OnInit, OnChanges, OnDestroy {
  timelineUrl = 'https://twitter.com/CompGradeSeed?ref_src=twsrc%5Etfw';
  twitterWidgetRef: ElementRef<HTMLScriptElement>;
  twitterFrameUnlistener;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this.loadTwitterStream();
    this.checkIframeLoaded();
  }

  checkIframeLoaded(): void {
    this.twitterFrameUnlistener = this.renderer.listen(
      this.doc,
      'DOMNodeInserted',
      (ev) => {
        let regex = new RegExp(/^twitter-widget-\d*/);
        if (
          ev.target instanceof HTMLIFrameElement &&
          regex.test(ev.target.id)
        ) {
          let iframe = ev.target;
          let iframeDoc =
            iframe.contentDocument || iframe.contentWindow.document;

          async function checkForIframeLoaded() {
            let iframeTimeout = setTimeout(() => {
              if (iframeDoc.readyState === 'complete') {
                clearTimeout(iframeTimeout);
                //check if there are children on the body, if not reload the page
                let bodyTag = iframeDoc.getElementsByTagName('body')[0];
                if (Array.from(bodyTag.children).length === 0) {
                  window.location.reload();
                }
              } else {
                checkForIframeLoaded();
              }
            }, 1000);
          }
          checkForIframeLoaded();
        }
      }
    );
  }

  loadTwitterStream(): void {
    console.log('LOADING TWITTER', this.twitterWidgetRef);
    const head = this.doc.getElementsByTagName('head')[0];
    const twitterScript = this.renderer.createElement('script');
    this.renderer.setAttribute(twitterScript, 'async', 'true');
    this.renderer.setAttribute(
      twitterScript,
      'src',
      'https://platform.twitter.com/widgets.js'
    );
    this.renderer.setAttribute(twitterScript, 'charset', 'utf-8');
    this.twitterWidgetRef = twitterScript;
    this.renderer.appendChild(head, twitterScript);
    console.log('NEW SCRIPT', this.twitterWidgetRef);
  }

  removeTwitterStream() {
    console.log('SCRIPT TAG', this.twitterWidgetRef);
    if (this.twitterWidgetRef) {
      console.log('REMOVING SCRIPT');
      this.renderer.removeChild(
        this.doc.getElementsByTagName('head')[0],
        this.twitterWidgetRef
      );
      this.twitterWidgetRef = null;
    }
  }

  ngOnChanges(): void {}

  ngOnDestroy(): void {
    this.removeTwitterStream();
    this.twitterFrameUnlistener();
  }
}

import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.css'],
})
export class InstagramFeedComponent implements OnInit {
  appId = 1238879886490476;
  appSecret = '390feb8442f5555c709b9e0210e210bd';

  accessToken;

  constructor(private http: HttpClient, private renderer: Renderer2) {}
  @ViewChild('root') root;

  ngOnInit(): void {
    this.http
      .get(
        `https://graph.facebook.com/oauth/access_token?client_id=${this.appId}&client_secret=${this.appSecret}&grant_type=client_credentials`
      )
      .subscribe((data: any) => {
        console.log('DATA', data);
        this.accessToken = data.access_token;

        this.http
          .get(
            `https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/CFx2BBdg3QS/&access_token=${this.accessToken}`
          )
          .subscribe((post: any) => {
            console.log('POST', post);
            console.log('ROOT', this.root);
            let text = this.renderer.createText('HELLO FROM ROOT');
            this.renderer.appendChild(this.root.nativeElement, text);
          });
      });
  }
}

import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Distributor } from 'src/app/models/distributor.model';
import { DistributorsService } from 'src/app/shared/distributors.service';

const createDistRedirect = distributor =>
  setTimeout(() => {
    window.location.href = distributor.websiteUrl;
  }, 3000000);

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit, OnDestroy {
  pageToDisplay;
  queryParamsSubscription: Subscription;
  distributor: Distributor;

  constructor(
    private document: Document,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private distributorsService: DistributorsService
  ) {}

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      ({ distributor }) => {
        this.distributor = this.distributorsService.getByName(distributor);
        if (this.distributor) {
          this.insertConversionTag();
        }
      }
    );

    if (this.distributor) {
      createDistRedirect(this.distributor);
    } else {
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 3000);
    }
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  insertConversionTag(): void {
    const head = this.document.querySelector('head');
    const script: HTMLScriptElement = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.textContent = `gtag('event', 'conversion', {
      send_to: 'AW-757443501/ci1rCMfN9KICEK3XlukC'
    })`;
    head.appendChild(script);
  }
}

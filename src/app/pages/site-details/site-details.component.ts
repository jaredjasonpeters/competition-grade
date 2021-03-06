import { ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css'],
})
export class SiteDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  fragmentSub: Subscription;
  @ViewChild('container', { static: true })
  container: ElementRef<HTMLDivElement>;
  @ViewChild('privacy', { static: true }) privacy: ElementRef<HTMLDivElement>;
  @ViewChild('terms', { static: true }) terms: ElementRef<HTMLDivElement>;
  @ViewChild('sitemap', { static: true }) sitemap: ElementRef<HTMLDivElement>;

  termsConditionsData: string[] = [
    'TERMS: Payment by the Buyer of the purchase price shall be net cash on date of delivery, subject to sight draft, Order Notify Bill of Lading attached.',
    'Pickseed USA, Inc. warrants to the extent of the purchase price that seeds sold are as described on the container within recognized tolerances.',
    'In the event of short crop, Seller reserves the right to fill this order “prorata” and in case of complete failure of crop, Seller shall not be held liable.',
    'Anything contained herein to the contrary notwithstanding, this contract shall be deemed to have been made at Tangent, Oregon, and Purchaser hereby agrees to submit to the jurisdiction of the courts of the State of Oregon to resolve all disputes relating to this contract.',
    'In the event that this sale is a sale to a purchaser located in the United States or Canada, then this contract and all matters relating to the performance of this contract shall be governed by the laws of the State of Oregon and the Noramseed Trade Rules and Usages except as the terms of this agreement may provide to the contrary. In the event of a conflict between the terms of this agreement and the Noramseed Trade Rules and Usages, then the terms of this agreement shall govern. At the option of Pickseed USA, Inc., any controversy hereunder may be resolved by suit or action in the appropriate court or by arbitration in accordance with the rules of the American Arbitration Association.',
    'In the event that the sale is a sale to a purchaser located outside of the United States or Canada, then this contract shall be governed by F.I.S. Rules. In the event of a conflict between the terms of this agreement and F.I.S. Rules, then the terms of this agreement shall govern.',
    'All amounts due under this agreement shall be payable in U.S. funds unless otherwise noted on the front of this agreement.',
    'In the event of a conflict between the terms of this agreement and any other contract covering this same transaction, then the terms of this agreement shall govern.',
    'In the event that litigation is instituted arising directly out of this contract, then the losing party shall pay to the prevailing party its reasonable attorney fees at both the trial and appellate levels.',
    'Purchaser shall not assign this agreement or his rights hereunder without the express written consent of Seller.',
    '11. Seller neither warrants nor guarantees against damage from the use and/or application of the commodity sold and hereby is expressly relieved from liability therefore. Unless expressly stated herein, Seller shall not be deemed to have any knowledge of any particular purpose for which the goods sold hereunder are required.',
    'This sale is based upon the present ocean freight rates, marine insurance, warfage, handling or terminal charges, tariff and custom house classifications, excises, taxes, and governmental charges, and any increase in any of the same subsequent to the date hereof, together with any demurrage charges, shall be at the expense of the Buyer.',
    'Any excise, taxes, fees or other charges now or hereafter imposed by any governmental agency or authority on the products governed hereby, their manufacture, refining, sale or use, shall be added to the price set forth herein.',
    'In the event that Buyer defaults in any payment to the Seller or becomes insolvent, or if a receiver is appointed for all or a part of Buyer’s assets, or a petition in bankruptcy, either voluntary or involuntary is filed by or against Buyer, Seller may, at its option, cancel all or any unfilled portion of this contract.',
    'In the event this agreement provides for the sale of several installments, then separate and independent contracts for sale of the several installments agreed to be delivered, are intended, and no breach by the Seller as to a particular installment shall effect the contract for payment as provided, or to fulfill the terms of this, or any other agreement with the Seller, the Seller may, without prejudice to any other lawful remedy, defer further deliveries, or at its option, cancel this or any other contracts with the Buyer, saving to the Seller the right to recover any damage suffered by such cancellation.',
    'Failure by Seller at any time to require performance by purchaser of any of the provisions hereof shall in no way affect Seller’s rights hereunder to enforce the same, nor shall any waiver of any breach hereof be held to be a waiver of any other succeeding breach, or a waiver of this non-waiver clause.',
    'The Noramseed Trade Rules and Usages govern this agreement, except as the terms of this agreement provide to the contrary, and provide that in all cases payment must be made in full when due and that it is not permissible to withhold payment to offset claims which the Buyer may have on this agreement. The Rules further provide that payment does not constitute acceptance of the fulfillment of the contract. The parties agree that if payment is not made when due that the Buyer agrees not to assert any defense, setoff, recoupment, claim or counterclaim which Buyer may have against Seller on account of or relating to this agreement.',
    'Any provisions hereof contrary to the law governing jurisdiction shall be deemed void to the extent of such prohibition, but without invalidating the remaining provisions hereof.',
  ];

  sitemapData: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    // this.fragmentSub.unsubscribe();
  }
}

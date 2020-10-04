import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-links',
  templateUrl: './featured-links.component.html',
  styleUrls: ['./featured-links.component.css'],
})
export class FeaturedLinksComponent implements OnInit {
  links = [
    {
      title: 'speed',
      imagePath: '../../../assets/speed_series.png',
    },
    {
      title: 'power',
      imagePath: '../../../assets/power_series.png',
    },
    {
      title: 'agility',
      imagePath: '../../../assets/agility_series.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

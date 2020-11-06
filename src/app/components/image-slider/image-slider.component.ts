import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input('speed')speed :number;
  activeImage: string
  currentIndex: number = 0;
  images: string[]
  sliderTimer;
  constructor() {}

  ngOnInit(): void {
  
    this.images = [
      '../../../../assets/Competition_Grade_SliderImage_Main.png',
      '../../../../assets/football_1500x1000.png',
      '../../../../assets/baseball_1500x1000.png',
      '../../../../assets/soccer_ball_1500x1000.png',
    ];
    this.activeImage = this.images[0];
    this.startSlider();
  }

  onPreviousImage(): void {
    this.resetSlider();
    if (this.currentIndex > 0) {
      this.currentIndex--
    } else {
      this.currentIndex = this.images.length -1 
    }

    this.activeImage = this.images[this.currentIndex];
  }
  onNextImage(): void {
    this.resetSlider();
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++
    } else {
      this.currentIndex = 0
    }
    this.activeImage = this.images[this.currentIndex];
  }

  startSlider(): void {
    this.sliderTimer = setInterval(() => {
      this.onNextImage();
    }, this.speed)
  }

  resetSlider(): void {
    clearInterval(this.sliderTimer);
    this.startSlider();
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderTimer);
  }
}

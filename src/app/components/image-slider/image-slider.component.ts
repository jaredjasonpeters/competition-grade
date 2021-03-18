import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProjectImage } from 'src/app/models/project-image.model';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  @Input() speed: number = 5000;
  activeImage: string;
  currentIndex: number = 0;
  @Input() images: string[];
  @Input() projectImages: ProjectImage[];
  @Input() showControls: boolean = true;

  sliderTimer;
  constructor() {}

  ngOnInit(): void {
    if (this.projectImages) {
      let images = [];
      images = this.projectImages.map(projectImage => projectImage.imagePath);

      console.log('IMAGES', images);
      this.images = images;
    }
    if (!this.images) {
      this.images = [
        '../../../../assets/football_home.jpg',
        '../../../../assets/baseball_home.jpg',
        '../../../../assets/soccer_home.jpg',
        '../../../../assets/4turf_home.jpg'
      ];
    }

    this.activeImage = this.images[0];
    this.startSlider();
  }

  onPreviousImage(): void {
    this.resetSlider();
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }

    this.activeImage = this.images[this.currentIndex];
  }
  onNextImage(): void {
    this.resetSlider();
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.activeImage = this.images[this.currentIndex];
  }

  startSlider(): void {
    this.sliderTimer = setInterval(() => {
      this.onNextImage();
    }, this.speed);
  }

  resetSlider(): void {
    clearInterval(this.sliderTimer);
    this.startSlider();
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderTimer);
  }
}

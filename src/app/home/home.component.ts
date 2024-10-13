import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  images: string[] = [
    'assets/bunty_container.jpg',
    'assets/bunty_container7.jpg',
    'assets/bunty_container8.jpg',
    'assets/bunty_container5370.jpg',
  ];

  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {}

  // Go to the previous slide
  prevSlide(): void {
    this.currentSlide = (this.currentSlide === 0) ? this.images.length - 1 : this.currentSlide - 1;
  }

  // Go to the next slide
  nextSlide(): void {
    this.currentSlide = (this.currentSlide === this.images.length - 1) ? 0 : this.currentSlide + 1;
  }

  // Go to a specific slide
  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
  }
}



import { Component, ElementRef, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { ImageItem } from '../image-item';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import lgFullscreen from 'lightgallery/plugins/fullscreen';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent{
  @Input() galleryData: ImageItem[] = [
    { imageSrc: './assets/poert1.png', imageAlt: 'poert1' },
    { imageSrc: './assets/port2.png', imageAlt: 'port2' },
    { imageSrc: './assets/port3.png', imageAlt: 'port3' },
    { imageSrc: './assets/poert1.png', imageAlt: 'poert4' },
    { imageSrc: './assets/port2.png', imageAlt: 'port5' },
    { imageSrc: './assets/port3.png', imageAlt: 'port6' },
  ];

  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail, lgShare, lgRotate, lgFullscreen]
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}


}

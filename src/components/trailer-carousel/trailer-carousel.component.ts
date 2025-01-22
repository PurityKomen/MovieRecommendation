import { Component, Input } from '@angular/core';
import { Trailer } from '../movie';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer-carousel',
  standalone: true,
  imports: [],
  templateUrl: './trailer-carousel.component.html',
  styleUrl: './trailer-carousel.component.css'
})
export class TrailerCarouselComponent {
  constructor(private sanitizer: DomSanitizer
  ) {
  }
  
    @Input() trailers!: any;
  
    trustUrl(key: string): string {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`) as string;
  }
}

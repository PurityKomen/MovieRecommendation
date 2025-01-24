import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
      trigger('routeTransition',[
        transition('* => *', [
          query(':enter', [
            style({ opacity: 0, scale: 0.9 }),
          ], { optional: true }),
          query(':leave', [
            animate('0.2s', style({ opacity: 0, scale: 0.9 }))
          ], { optional: true }),
          query(':enter', [
            animate('0.2s', style({ opacity: 1, scale: 1 }))
          ], { optional: true })
        ])
      ])
    ],
})
export class AppComponent {
  constructor(protected route: ActivatedRoute) {
  }
}

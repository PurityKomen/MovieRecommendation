import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet  } from '@angular/router';
import { AuthService } from '../components/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  providers: [AuthService],
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
export class AppComponent implements OnInit{
  constructor(protected route: ActivatedRoute,
    public authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    /* Check if there is a user logged in, there is a user
    we set the email and username and redirect to movies 
    if not we set user to null and redirect to signup page*/
    this.authService.user$.subscribe(data => {
      if(data){
        this.authService.currentUser.set({
          email: data.email!,
          username: data.displayName!,
        })
        this.router.navigate(['/movies']);
      } else {
        this.authService.currentUser.set(null)
        this.router.navigate(['/register']);
      }
    })
  }
}

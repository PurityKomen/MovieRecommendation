import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from '../components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-recommendation';
}

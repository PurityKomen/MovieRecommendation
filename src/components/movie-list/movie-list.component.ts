import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  providers: [MovieService],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  constructor(
    private movieService:MovieService,
  ) {
  }

  ngOnInit() { 
    this.movieService.getMovies().subscribe(data => {
      console.log(data)
    }) 
  }
}


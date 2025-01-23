import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  providers: [MovieService],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  public movieData!: any;
  public movies!: Movie[];
  

  constructor(public movieService: MovieService, private router: Router) {}

  viewMovieDetail(id: number) {
    this.router.navigate(['/movie', id]);
  }

  ngOnInit() {
    //fetch trending movies
    this.movieService.getMovies().subscribe((data) => {
      this.movieData = data;
      this.movies = this.movieData.results;
    });
  }
}

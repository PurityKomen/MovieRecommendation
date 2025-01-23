import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgbRatingModule],
  providers: [MovieService,NgbRatingConfig],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  public movieData!: any;
  public movies!: Movie[];
  public movieDetail!:any
  public rating!: any

  constructor(public movieService: MovieService, private router: Router, config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
		config.max = 10;
		config.readonly = true;
  }

  //redirect to movie details page
  viewMovieDetail(id: number) {
    this.router.navigate(['/movie', id]);
  }

  ngOnInit() {
    //fetch trending movies
    this.movieService.getMovies().subscribe((data) => {
      this.movieData = data;
      this.movies = this.movieData.results;
    });

    //get movie details from id
    this.movieService.getMovieById(762509).subscribe(data => {
      this.movieDetail = data
      console.log(this.movieDetail)
      this.rating = this.movieDetail.vote_average
    }) 
  }
}

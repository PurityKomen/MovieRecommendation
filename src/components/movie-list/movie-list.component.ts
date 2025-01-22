import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { TrailerCarouselComponent } from "../trailer-carousel/trailer-carousel.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [TrailerCarouselComponent],
  providers: [MovieService],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  public movieData!: any
  public movies!: Movie[]
  public trailerResponse: any
  public trailers: any
  
  constructor(
    public movieService:MovieService,
  ) {
  }

  ngOnInit() { 
    //fetch trending movies
    this.movieService.getMovies().subscribe(data => {
      this.movieData = data
      this.movies = this.movieData.results
    }) 

    //fetch movie trailers
    this.movieService.getMovieTrailers(5).subscribe(data => {
      this.trailerResponse = data
      this.trailers = this.trailerResponse.results
      console.log(this.trailers)
    }) 
  }
}


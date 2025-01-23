import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { TrailerCarouselComponent } from '../trailer-carousel/trailer-carousel.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [TrailerCarouselComponent],
  providers: [MovieService],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public movieService:MovieService,
  ) {}
  public movieId!: any
  public movieDetail!: any
  public genres:any = []
  public movieInfo!:any
  public movieCast!:any
  public trailerResponse: any;
  public trailers: any;
  public trailerList:any

  ngOnInit() { 
    //get movie id from the route
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id'); 
    });

    //get movie details from id
    this.movieService.getMovieById(this.movieId).subscribe(data => {
      this.movieDetail = data
    }) 

    //fetch movie cast
    this.movieService.getMovieCast(this.movieId).subscribe(data => {
      this.movieInfo = data
      this.movieCast = this.movieInfo.cast
    }) 

    //fetch movie trailers
    this.movieService.getMovieTrailers(this.movieId).subscribe(data => {
      this.trailerResponse = data
      this.trailerList = this.trailerResponse.results
      this.trailers = this.trailerList
    })
  }

}

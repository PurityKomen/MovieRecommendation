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
  public loading:boolean = false

  //get movie details from id
  getMovieDetails(){
    console.log('id',this.movieId)
    this.loading = true
    this.movieService.getMovieById(this.movieId).subscribe({
      next: (data) => {
        this.movieDetail = data
        this.loading = false
    },
    error: (err)=>console.log('error',err)
    });
  }

  //fetch movie cast
  getCast(){
    this.loading = true
    this.movieService.getMovieCast(this.movieId).subscribe({
      next: (data) => {
        this.movieInfo = data
        this.movieCast = this.movieInfo.cast  
        this.loading = false
    },
      error: (err)=>console.log('error',err)
    });
  }


  //get movie details from id
  getMovieTrailer(){
    this.loading = true
    this.movieService.getMovieTrailers(this.movieId).subscribe({
      next: (data) => {
        this.trailerResponse = data
        this.trailerList = this.trailerResponse.results
        this.trailers = this.trailerList
        this.loading = false
    },
      error: (err)=>console.log('error',err)
    });
  }

  ngOnInit() { 
    //get movie id from the route
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id'); 
    });

    this.getMovieDetails()
    this.getCast()
    this.getMovieTrailer()
  }

}

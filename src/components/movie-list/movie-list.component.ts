import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgbRatingModule,HttpClientModule,FormsModule, ReactiveFormsModule,RouterModule],
  providers: [MovieService,NgbRatingConfig,HttpClient,AuthService],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
  animations: [
    trigger('animation',[
      transition(':enter', [
        animate('1.25s', keyframes([
            style({ scale: 0.7, opacity: 0.7, translate: '-300% 0', offset: 0 }),
            style({ scale: 0.7, opacity: 0.7, translate: '0 0', offset: 0.8 }),
            style({ scale: 1, opacity: 1, translate: '0 0', offset: 1 }),
        ]))
    ])
    ])
  ],
})
export class MovieListComponent implements OnInit {
  public movieData!: any;
  public movies!: Movie[];
  public movieDetail!:any
  public rating!: any
  public loading: boolean = false
  searchForm!: FormGroup
  public searchResult: any
  public searchList!: any
  public movieList!: Movie[];
  public userPreferences = { 
    //genre ids for comedy,action and drama
    genres: {
      genre1: 35,
      genre2:28,
      genre3:18},
    // actor_id for Jamie Fox
    actors: 134
  }; 
  public genre:any
  public recommendMovies!: any

  constructor(
    public movieService: MovieService,
     public router: Router, 
     config: NgbRatingConfig,
     public fb: FormBuilder,
     protected route: ActivatedRoute,
     public authService: AuthService,
    ) {
    // customize default values of ratings used by this component tree
		config.max = 10;
		config.readonly = true;
  }

  //redirect to movie details page
  viewMovieDetail(id: number) {
    this.router.navigate(['/movie', id]);
  }

  //Perform a search of movie title
  searchMovieDetail(){
    const searchCriteria = {
      query: ''
    };

    searchCriteria.query = this.searchForm?.value.name

    //Update data with the data from the form
    this.movieService.searchMovie(searchCriteria).subscribe(data => {
      this.searchList = data
      this.searchResult = this.searchList.results
      this.searchForm.reset()
    })
    
  }
 
  //fetch all movies
  getAllMovies(){
    this.loading = true
    this.movieService.getMovies().subscribe({
      next: (data) => {
      this.movieData = data;
      this.loading = false
      this.movieList = this.movieData.results
      this.movies = this.movieData.results.slice(0,4)
    },
    error: (err)=>console.log('error',err)
    });
  }

  //get movie details from id
  getMovieDetails(){
    this.loading = true
    this.movieService.getMovieById(1241982).subscribe({
      next: (data) => {
        this.movieDetail = data
        this.loading = false
        this.rating = this.movieDetail.vote_average
    },
    error: (err)=>console.log('error',err)
    });
  }

  //Logout a user
  logout(){
    this.authService.logout()
  }

 //View all movies
  viewDiscoverMovies(){
    this.router.navigate(['/cards']);
  }

  //View recommended movies
  viewRecommendedMovies(){
    this.router.navigate(['/recommend']);
  }

  //recommendation algorithm based on user preferences on genres and actors the user likes
  recomendedMovies(){
    /* Based on user preferences,we will return an api with certain genres and actors the user loves
     we will send the genre id and actor id and attach it to the api to return movies
     which contain any of those genres and actors*/
     const genre1 = this.userPreferences.genres.genre1
     const genre2 = this.userPreferences.genres.genre2
     const genre3 = this.userPreferences.genres.genre3
     const actor1 = this.userPreferences.actors

     return this.movieService.getRecommendedMovies(genre1,genre2,genre3,actor1).subscribe((data:any) => {
      this.recommendMovies = data.results.slice(0,4)
    })
  }

  ngOnInit() {
    this.getAllMovies()
    this.getMovieDetails()
    this.recomendedMovies()

    //Validate data from the form
    this.searchForm = this.fb.group(
      {
        name: [''],
        query: [''],
      },
  );
     
}
}

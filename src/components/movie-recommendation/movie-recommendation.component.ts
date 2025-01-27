import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-recommendation',
  standalone: true,
  imports: [],
  providers: [MovieService],
  templateUrl: './movie-recommendation.component.html',
  styleUrl: './movie-recommendation.component.css',
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
export class MovieRecommendationComponent implements OnInit{
  constructor(
        public movieService: MovieService,
        private router: Router, 
        protected route: ActivatedRoute,
        ) {
      }

  public userPreferences = { 
    //genre ids for comedy,action and drama
    genres: {
      genre1: 35,
      genre2:28,
      genre3:18},
    // actor_id for Jamie Fox
    actors: 134
  }; 
  public recommendMovies!: any

  //redirect to movie details page
  viewMovieDetail(id: number) {
    this.router.navigate(['/movie', id]);
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
      this.recommendMovies = data.results
    })
  }

  ngOnInit() {
    this.recomendedMovies()
  }

}

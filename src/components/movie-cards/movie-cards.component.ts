import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-cards',
  standalone: true,
  imports: [],
  templateUrl: './movie-cards.component.html',
  styleUrl: './movie-cards.component.css',
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
export class MovieCardsComponent implements OnInit{
  constructor(
      public movieService: MovieService,
      private router: Router, 
      protected route: ActivatedRoute,
      ) {
    }

    public movieData!: any;
    public movies!: Movie[];
    public movieDetail!:any
    public loading: boolean = false

  //fetch all movies
  getAllMovies(){
    this.loading = true
    this.movieService.getMovies().subscribe({
      next: (data) => {
      this.movieData = data;
      this.loading = false
      this.movies = this.movieData.results
    },
    error: (err)=>console.log('error',err)
    });
  }

  //redirect to movie details page
  viewMovieDetail(id: number) {
    this.router.navigate(['/movie', id]);
  }

  ngOnInit() {
    this.getAllMovies()
  }

}

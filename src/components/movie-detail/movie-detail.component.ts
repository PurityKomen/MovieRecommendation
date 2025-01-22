import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
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

  ngOnInit() { 
    //get movie id from the route
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id'); 
    });

    this.movieService.getMovieById(this.movieId).subscribe(data => {
      console.log('data',data)
      this.movieDetail = data
      
      for(const item of this.movieDetail.genres){
        this.genres.unshift(item.name)
      }
    }) 
  }

}

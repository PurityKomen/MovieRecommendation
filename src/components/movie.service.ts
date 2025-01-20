import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from './movie'
import { environment } from './environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  //Trending url
  trendingUrl: string = 'https://api.themoviedb.org/3/trending/all/day'
  apiUrl: string = 'https://api.themoviedb.org/3'
  // retrieve api key
  apiKey: string = environment.apiKey

  // get movies
  getMovies() {
    return this.http.get<Movie[]>(`${this.trendingUrl}?api_key=${this.apiKey}`, { observe: 'body' })
  }


  // get movie by id
  getMovieById(id: number) {
    return this.http.get<Movie[]>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  // Perform a search
  searchMovie(searchCriteria: {query: string, page: number}) {
    const params = new HttpParams({ fromObject: searchCriteria });
    return this.http.get(`${this.apiUrl}/search/multi?api_key=${this.apiKey}`, { params })
  }

}
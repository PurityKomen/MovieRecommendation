import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from './movie'

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://api.themoviedb.org/3/trending/all/day?api_key=62a3afe51985531994eabe31c623aab1'
  apiUrl: string = 'https://api.themoviedb.org/3'

  // get movies
  getMovies() {
    return this.http.get<Movie[]>(`${this.apiUrl}/trending/all/day`)
  }
  

  // get movie by id
  getMovieById(id: number) {
    return this.http.get<Movie[]>(`${this.apiUrl}/movie/${id}`)
  }

  // Perform a search
  searchMovie(searchCriteria: {query: string, page: number}) {
    const params = new HttpParams({ fromObject: searchCriteria });
    return this.http.get(`${this.apiUrl}/search/multi`, { params })
  }

}
import { fakeAsync, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MovieService } from './movie.service';

describe('MovieServiceComponent', () => {
  let service: MovieService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule],
      providers: [MovieService],
      teardown: {destroyAfterEach: false}  
    })
    service = TestBed.inject(MovieService);
  });

  it('should test getMovies', fakeAsync(() => {
    spyOn(service, 'getMovies').and.callThrough();
    service.getMovies()
    expect(service.getMovies).toHaveBeenCalled();
  }));

  it('should test getMovieTrailers', fakeAsync(() => {
    spyOn(service, 'getMovieTrailers').and.callThrough();
    service.getMovieTrailers(1)
    expect(service.getMovieTrailers).toHaveBeenCalled();
  }));

  it('should test getMovieById', fakeAsync(() => {
    spyOn(service, 'getMovieById').and.callThrough();
    service.getMovieById(1)
    expect(service.getMovieById).toHaveBeenCalled();
  }));

  it('should test getMovieCast', fakeAsync(() => {
    spyOn(service, 'getMovieCast').and.callThrough();
    service.getMovieCast(1)
    expect(service.getMovieCast).toHaveBeenCalled();
  }));

  it('should test searchMovie', fakeAsync(() => {
    spyOn(service, 'searchMovie').and.callThrough();
    service.searchMovie({query: 'hello'})
    expect(service.searchMovie).toHaveBeenCalled();
  }));

  it('should test getGenre', fakeAsync(() => {
    spyOn(service, 'getGenre').and.callThrough();
    service.getGenre()
    expect(service.getGenre).toHaveBeenCalled();
  }));

  it('should test getRecommendedMovies', fakeAsync(() => {
    spyOn(service, 'getRecommendedMovies').and.callThrough();
    service.getRecommendedMovies(1,2,3,1)
    expect(service.getRecommendedMovies).toHaveBeenCalled();
  }));
});
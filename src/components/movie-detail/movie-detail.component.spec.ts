import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailComponent, HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test getMovieDetails ', () => {
    spyOn(component, 'getMovieDetails').and.callThrough();
    component.getMovieDetails();
    expect(component.getMovieDetails).toHaveBeenCalled();
  });

  it('should test getCast', () => {
    spyOn(component, 'getCast').and.callThrough();
    component.getCast();
    expect(component.getCast).toHaveBeenCalled();
  });

  it('should test getMovieTrailer', () => {
    spyOn(component, 'getMovieTrailer').and.callThrough();
    component.getMovieTrailer();
    expect(component.getMovieTrailer).toHaveBeenCalled();
  });
});

describe('MovieDetailComponent when it throws an error', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailComponent, HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test getMovieDetails ', () => {
    spyOn(component, 'getMovieDetails').and.callThrough();
    component.getMovieDetails();
    expect(component.getMovieDetails).toHaveBeenCalled();
  });

  it('should test getCast', () => {
    spyOn(component, 'getCast').and.callThrough();
    component.getCast();
    expect(component.getCast).toHaveBeenCalled();
  });

  it('should test getMovieTrailer', () => {
    spyOn(component, 'getMovieTrailer').and.callThrough();
    component.getMovieTrailer();
    expect(component.getMovieTrailer).toHaveBeenCalled();
  });
});

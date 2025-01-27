import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardsComponent } from './movie-cards.component';

describe('MovieCardsComponent', () => {
  let component: MovieCardsComponent;
  let fixture: ComponentFixture<MovieCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test getAllMovies ', () => {
    spyOn(component, 'getAllMovies').and.callThrough();
    component.getAllMovies();
    expect(component.getAllMovies).toHaveBeenCalled();
  });

  it('should test viewMovieDetail ', () => {
    spyOn(component, 'viewMovieDetail').and.callThrough();
    component.viewMovieDetail(1);
    expect(component.viewMovieDetail).toHaveBeenCalled();
  });
});

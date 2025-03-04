import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

const authStub: any = {
  authState: {},
  auth: {
    signInWithEmailAndPassword() {
      return Promise.resolve();
    },
    createUserWithEmailAndPassword() {
      return Promise.resolve();
    }
  }
};

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MovieListComponent,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'movie', component: MovieDetailComponent },
        ]),
      ],
      providers: [
        { provide: AuthService, useClass: AuthService },
        { provide: Auth, useValue: authStub },
      ],
      teardown: { destroyAfterEach: false },
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test viewMovieDetail ', () => {
    spyOn(component, 'viewMovieDetail').and.callThrough();
    component.viewMovieDetail(1);
    expect(component.viewMovieDetail).toHaveBeenCalled();
  });

  it('should test getAllMovies ', () => {
    spyOn(component, 'getAllMovies').and.callThrough();
    component.getAllMovies();
    expect(component.getAllMovies).toHaveBeenCalled();
  });

  it('should test getMovieDetails ', () => {
    spyOn(component, 'getMovieDetails').and.callThrough();
    component.getMovieDetails();
    expect(component.getMovieDetails).toHaveBeenCalled();
  });

  it('should test logout', () => {
    spyOn(component, 'logout').and.callThrough();
    component.logout();
    expect(component.logout).toHaveBeenCalled();
  });
});

describe('MovieListComponent when it throws an error', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should test getAllMovies ', () => {
    spyOn(component, 'getAllMovies').and.callThrough();
    component.getAllMovies();
    expect(component.getAllMovies).toHaveBeenCalled();
  });

  it('should test getMovieDetails ', () => {
    spyOn(component, 'getMovieDetails').and.callThrough();
    component.getMovieDetails();
    expect(component.getMovieDetails).toHaveBeenCalled();
  });
});

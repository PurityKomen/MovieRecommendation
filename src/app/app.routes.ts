import { Routes } from '@angular/router';
import { MovieListComponent } from '../components/movie-list/movie-list.component';
import { MovieDetailComponent } from '../components/movie-detail/movie-detail.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { MovieCardsComponent } from '../components/movie-cards/movie-cards.component';
import { MovieRecommendationComponent } from '../components/movie-recommendation/movie-recommendation.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'movies', component: MovieListComponent },
    { path: 'cards', component: MovieCardsComponent },
    { path: 'recommend', component: MovieRecommendationComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: '**', redirectTo: 'movies', pathMatch: 'full' },
];

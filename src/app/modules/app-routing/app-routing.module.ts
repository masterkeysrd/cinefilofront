import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ListGenreComponent} from '../../components/dashboard/genre/list-genre/list-genre.component';
import {AddGenreComponent} from '../../components/dashboard/genre/add-genre/add-genre.component';
import {EditGenreComponent} from '../../components/dashboard/genre/edit-genre/edit-genre.component';
import {ListLanguageComponent} from '../../components/dashboard/language/list-language/list-language.component';
import {AddLanguageComponent} from '../../components/dashboard/language/add-language/add-language.component';
import {EditLanguageComponent} from '../../components/dashboard/language/edit-language/edit-language.component';
import {ListMovieComponent} from '../../components/dashboard/movie/list-movie/list-movie.component';
import {AddMovieComponent} from '../../components/dashboard/movie/add-movie/add-movie.component';
import {EditMovieComponent} from '../../components/dashboard/movie/edit-movie/edit-movie.component';
import {ViewMovieComponent} from '../../components/dashboard/movie/view-movie/view-movie.component';
import {AddCinemaComponent} from '../../components/dashboard/cinema/add-cinema/add-cinema.component';
import {ListCinemaComponent} from '../../components/dashboard/cinema/list-cinema/list-cinema.component';
import {EditCinemaComponent} from '../../components/dashboard/cinema/edit-cinema/edit-cinema.component';
import {AddRoomComponent} from '../../components/dashboard/room/add-room/add-room.component';
import {EditRoomComponent} from '../../components/dashboard/room/edit-room/edit-room.component';
import {ListRoomComponent} from '../../components/dashboard/room/list-room/list-room.component';
import {AddShowComponent} from '../../components/dashboard/show/add-show/add-show.component';
import {EditShowComponent} from '../../components/dashboard/show/edit-show/edit-show.component';
import {ListShowComponent} from '../../components/dashboard/show/list-show/list-show.component';
import {IndexComponent} from '../../components/page/index/index.component';
import {MovieDetailComponent} from '../../components/page/movie-detail/movie-detail.component';
import {PremiereComponent} from '../../components/page/premiere/premiere.component';
import {BillboardComponent} from '../../components/page/billboard/billboard.component';

const routes: Routes = [
  {path: 'dashboard/genre', component: ListGenreComponent},
  {path: 'dashboard/genre/add', component: AddGenreComponent},
  {path: 'dashboard/genre/edit/:id', component: EditGenreComponent},
  {path: 'dashboard/language', component: ListLanguageComponent},
  {path: 'dashboard/language/add', component: AddLanguageComponent},
  {path: 'dashboard/language/edit/:id', component: EditLanguageComponent},
  {path: 'dashboard/movie', component: ListMovieComponent},
  {path: 'dashboard/movie/add', component: AddMovieComponent},
  {path: 'dashboard/movie/edit/:id', component: EditMovieComponent},
  {path: 'dashboard/movie/view/:id', component: ViewMovieComponent},
  {path: 'dashboard/cinema/add', component: AddCinemaComponent},
  {path: 'dashboard/cinema', component: ListCinemaComponent},
  {path: 'dashboard/cinema/edit/:id', component: EditCinemaComponent},
  {path: 'dashboard/room/add', component: AddRoomComponent},
  {path: 'dashboard/room', component: ListRoomComponent},
  {path: 'dashboard/room/edit/:id', component: EditRoomComponent},
  {path: 'dashboard/show', component: ListShowComponent},
  {path: 'dashboard/show/add', component: AddShowComponent},
  {path: 'dashboard/show/edit/:id', component: EditShowComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'premiere', component: PremiereComponent},
  {path: 'billboard', component: BillboardComponent},
  {path: 'index', component: IndexComponent}
];

const pageRoutes: Routes = [
]
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

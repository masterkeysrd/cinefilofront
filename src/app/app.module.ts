import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddGenreComponent } from './components/dashboard/genre/add-genre/add-genre.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ListGenreComponent } from './components/dashboard/genre/list-genre/list-genre.component';
import {HttpClientModule} from '@angular/common/http';

import {GenreService} from './shared/services/genre.service';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import { EditGenreComponent } from './components/dashboard/genre/edit-genre/edit-genre.component';
import { AddLanguageComponent } from './components/dashboard/language/add-language/add-language.component';
import { ListLanguageComponent } from './components/dashboard/language/list-language/list-language.component';
import { EditLanguageComponent } from './components/dashboard/language/edit-language/edit-language.component';
import {LanguageService} from './shared/services/language.service';
import { NavComponent } from './components/dashboard/nav/nav.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { ListMovieComponent } from './components/dashboard/movie/list-movie/list-movie.component';
import { AddMovieComponent } from './components/dashboard/movie/add-movie/add-movie.component';
import { EditMovieComponent } from './components/dashboard/movie/edit-movie/edit-movie.component';
import { ViewMovieComponent } from './components/dashboard/movie/view-movie/view-movie.component';
import { RoundPipe } from './shared/pipes/round.pipe';
import { LoaderComponent } from './components/dashboard/util/loader/loader.component';
import { FormInputComponent } from './components/dashboard/util/form-input/form-input.component';
import { AddCinemaComponent } from './components/dashboard/cinema/add-cinema/add-cinema.component';
import { TextAreaComponent } from './components/dashboard/util/text-area/text-area.component';
import { ButtonSaveComponent } from './components/dashboard/util/button-save/button-save.component';
import { ButtonCancelComponent } from './components/dashboard/util/button-cancel/button-cancel.component';
import { OptionHeaderComponent } from './components/dashboard/util/option-header/option-header.component';
import { ListCinemaComponent } from './components/dashboard/cinema/list-cinema/list-cinema.component';
import { ButtonCreateComponent } from './components/dashboard/util/button-create/button-create.component';
import { EditCinemaComponent } from './components/dashboard/cinema/edit-cinema/edit-cinema.component';
import { ButtonEraseComponent } from './components/dashboard/util/button-erase/button-erase.component';
import { ButtonEditComponent } from './components/dashboard/util/button-edit/button-edit.component';
import { ButtonViewComponent } from './components/dashboard/util/button-view/button-view.component';
import { FormInputDropdownComponent } from './components/dashboard/util/form-input-dropdown/form-input-dropdown.component';
import { FormInputImageComponent } from './components/dashboard/util/form-input-image/form-input-image.component';
import { AddRoomComponent } from './components/dashboard/room/add-room/add-room.component';
import { ListRoomComponent } from './components/dashboard/room/list-room/list-room.component';
import { EditRoomComponent } from './components/dashboard/room/edit-room/edit-room.component';
import { AddShowComponent } from './components/dashboard/show/add-show/add-show.component';
import { ListShowComponent } from './components/dashboard/show/list-show/list-show.component';
import { EditShowComponent } from './components/dashboard/show/edit-show/edit-show.component';
import { ButtonBackComponent } from './components/dashboard/util/button-back/button-back.component';
import { IndexComponent } from './components/page/index/index.component';
import { HeaderComponent } from './components/page/header/header.component';
import { MovieGroupComponent } from './components/page/movie-group/movie-group.component';
import { MovieDetailComponent } from './components/page/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGenreComponent,
    ListGenreComponent,
    EditGenreComponent,
    AddLanguageComponent,
    ListLanguageComponent,
    EditLanguageComponent,
    NavComponent,
    SidebarComponent,
    ListMovieComponent,
    AddMovieComponent,
    EditMovieComponent,
    ViewMovieComponent,
    RoundPipe,
    LoaderComponent,
    FormInputComponent,
    AddCinemaComponent,
    TextAreaComponent,
    ButtonSaveComponent,
    ButtonCancelComponent,
    OptionHeaderComponent,
    ListCinemaComponent,
    ButtonCreateComponent,
    EditCinemaComponent,
    ButtonEraseComponent,
    ButtonEditComponent,
    ButtonViewComponent,
    FormInputDropdownComponent,
    FormInputImageComponent,
    AddRoomComponent,
    ListRoomComponent,
    EditRoomComponent,
    AddShowComponent,
    ListShowComponent,
    EditShowComponent,
    ButtonBackComponent,
    IndexComponent,
    HeaderComponent,
    MovieGroupComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FilmComponent } from './film/film.component';
import { FilmCategoryComponent } from './film-category/film-category.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, FilmComponent, FilmCategoryComponent, UserComponent]
})
export class MainModule { }

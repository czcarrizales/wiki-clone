import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewArticleComponent } from './pages/new-article/new-article/new-article.component';
import { HomeComponent } from './pages/home/home.component';
import { AllArticlesComponent } from './pages/all-articles/all-articles.component';
import { SelectedArticleComponent } from './pages/selected-article/selected-article.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NewArticleComponent,
    HomeComponent,
    AllArticlesComponent,
    SelectedArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

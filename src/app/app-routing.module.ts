import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllArticlesComponent } from './pages/all-articles/all-articles.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { HomeComponent } from './pages/home/home.component';
import { NewArticleComponent } from './pages/new-article/new-article/new-article.component';
import { SelectedArticleComponent } from './pages/selected-article/selected-article.component';

const routes: Routes = [
  {path: '', redirectTo: 'articles', pathMatch: 'full'},
  {path: 'new-article', component: NewArticleComponent},
  {path: 'articles/:id', component: SelectedArticleComponent},
  {path: 'articles', component: HomeComponent},
  {path: 'all-articles', component: AllArticlesComponent},
  {path: 'articles/:id/edit-article', component: EditArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

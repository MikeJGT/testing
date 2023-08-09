import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { NewsFiltersComponent } from './components/news/news-filters/news-filters.component';
import { SearchNewsComponent } from './components/pages/search-news/search-news.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SearchNewsComponent },
  { path: 'form', component: NewsFiltersComponent },
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

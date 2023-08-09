import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCardComponent } from './components/news/new-card/new-card.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { NewsFiltersComponent } from './components/news/news-filters/news-filters.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchNewsComponent } from './components/pages/search-news/search-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCardComponent,
    NewsListComponent,
    NewsFiltersComponent,
    SearchNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

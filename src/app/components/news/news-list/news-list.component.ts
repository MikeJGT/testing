import { Component, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {

  @Input() params: any;
  newsList: any
  constructor(private newSV: NewsService) {
    this.newsList = {}

  }

  async onClick(parametros: any) {
    try {
      this.newsList = await this.newSV.getSearchNews(parametros);
      console.log('Lista de Noticias', this.newsList)
      return this.newsList;
    } catch (error) {
      return { fail: error }
    }
  }
}

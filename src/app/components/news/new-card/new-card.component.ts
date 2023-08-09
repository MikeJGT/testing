import { Component, Input } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { UrlParams } from 'src/app/interfaces/url-params';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent {

  //public results: any

  @Input() results: News;

  constructor() {
    this.results = {
      author: '',
      id: 0,
      image: '',
      language: '',
      publish_date: '',
      sentiment: 0,
      source_country: '',
      text: '',
      title: '',
      url: ''
    }
    // this.params = {
    //   text: 'Elon',
    //   sourceCountries: 'source-countries',
    //   sortDirection: 'sort-direction',
    //   sort: 'sort',
    //   offset: 'offset',
    //   number: 'number',
    //   newsSources: 'news-sources',
    //   minSentiment: 'min-sentiment',
    //   maxSentiment: 'max-sentiment',
    //   locationFilter: 'location-filter',
    //   latestPublishDate: 'latest-publish-date',
    //   language: 'es',
    //   entities: 'entities',
    //   earliestPublishDate: 'earliest-publish-date',
    //   authors: 'authors'
    // }
  }
  // ngOnInit() {
  //   this.onCLick();
  // }
  // async otraApi() {
  //   try {
  //     this.results = await this.newSV.otraApi('Alonso');
  //     console.log('Results', this.results)
  //     return this.results
  //   } catch (err) {
  //     console.log('ERROR >>>>', err)
  //     return { fatal: err }
  //   }
  // }

  // async onCLick() {
  //   try {
  //     this.results = await this.newSV.getSearchNews();
  //     console.log('Results', this.results)

  //   } catch (err) {
  //     console.log('ERROR >>>>', err)

  //   }
  // }
  // async onCLick4() {
  //   try {
  //     this.results = await this.newSV.getCuatro();
  //     console.log('Results', this.results)
  //     return this.results
  //   } catch (err) {
  //     console.log('ERROR >>>>', err)
  //     return { fatal: err }
  //   }
  // }
  // async onCLick3() {
  //   try {
  //     this.results = await this.newSV.getTres();
  //     console.log('Results', this.results)
  //     return this.results
  //   } catch (err) {
  //     console.log('ERROR >>>>', err)
  //     return { fatal: err }
  //   }
  // }
}

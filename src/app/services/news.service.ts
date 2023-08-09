import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { UrlParams } from '../interfaces/url-params';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = 'https://api.apilayer.com/world_news/search-news?'
  private access_key = 'kOS4RfzwYblfi95nht0WOOVqYagRNkHl';

  constructor(private httpCli: HttpClient) {
  }

  getSearchNews({
    text,
    sortDirection,
    sort,
    minSentiment,
    maxSentiment,
    latestPublishDate,
    language,
    earliestPublishDate
  }: UrlParams) {
    console.log('RECIBIDOS en SV', `https://api.apilayer.com/world_news/search-news?text=${text}&sort-direction=${sortDirection}&sort=${sort}&min-sentiment=${minSentiment}&max-sentiment=${maxSentiment}&latest-publish-date=${latestPublishDate}&language=${language}&earliest-publish-date=${earliestPublishDate}`)
    return firstValueFrom(
      this.httpCli.get<any[]>(`${this.baseUrl}text=${text}&sort-direction=${sortDirection}&sort=${sort}&min-sentiment=${minSentiment}&max-sentiment=${maxSentiment}&latest-publish-date=${latestPublishDate}&language=${language}&earliest-publish-date=${earliestPublishDate}`, { headers: { apikey: this.access_key } })
    )
  }

  //`http://api.mediastack.com/v1/news?access_key=1be3a38c4b08deee81b23c0810acbce1&keywords=moscu&countries=es&date=2023-01-01,2023-08-01`
  otraApi(
    keywords: String
  ) {
    return firstValueFrom(
      this.httpCli.get<any[]>(`http://api.mediastack.com/v1/news?access_key=${this.access_key}&keywords=${keywords}&countries=es`)
    )
  }
}

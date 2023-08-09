import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsListComponent } from './news-list.component';
import { NewsService } from 'src/app/services/news.service';
import { UrlParams } from 'src/app/interfaces/url-params';
import { By } from '@angular/platform-browser';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let newsSVstub: any;
  let params: UrlParams = {
    text: 'Elon',
    sortDirection: 'asc',
    sort: 'sentiment',
    minSentiment: '-1',
    maxSentiment: '1',
    latestPublishDate: '2023-08-08',
    language: 'en',
    earliestPublishDate: '2020-01-05'
  }
  newsSVstub = {
    news:
    {
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

  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsListComponent],
      providers: [{ provide: NewsService, useValue: newsSVstub }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should obtain a list of news after onClick method', () => {
    component.onClick(params);
    component.newsList = newsSVstub;
    expect(component.newsList).withContext('Consulting News Service').toEqual(newsSVstub);
  });
});

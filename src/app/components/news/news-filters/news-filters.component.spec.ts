import { NewsFiltersComponent } from './news-filters.component';

describe('NewsFiltersComponent Standalone test', () => {

  it('should be a valid formulary.', () => {
    const comp = new NewsFiltersComponent;
    comp.formulary.setValue({
      text: 'noticia',
      sortDirection: '',
      sort: '',
      minSentiment: '',
      maxSentiment: '',
      latestPublishDate: new Date('2022-07-08'),
      language: '',
      earliestPublishDate: new Date('2020-08-18'),
    })
    expect(comp.formulary.valid).toBeTruthy();
  });
});
import { NewCardComponent } from './new-card.component';
import { News } from 'src/app/interfaces/news';

describe('NewCardComponent Standalone test', () => {

  it('should recibe a News data object as an input', () => {
    const comp = new NewCardComponent();
    const results: News = {
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
    };
    expect(comp.results).toEqual(results);
  });
});

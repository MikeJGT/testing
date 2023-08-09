import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-filters',
  templateUrl: './news-filters.component.html',
  styleUrls: ['./news-filters.component.scss']
})
export class NewsFiltersComponent {
  formulary: FormGroup;

  constructor() {
    this.formulary = new FormGroup({
      text: new FormControl('', [Validators.required]),
      sortDirection: new FormControl('asc'),
      sort: new FormControl('publish-time'),
      minSentiment: new FormControl('-0.4'),
      maxSentiment: new FormControl('1'),
      latestPublishDate: new FormControl(),
      language: new FormControl('es'),
      earliestPublishDate: new FormControl(),
    });
  }
}



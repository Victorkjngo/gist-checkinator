import { Component, OnInit } from '@angular/core';

import { GISTS } from '../mock-gists';

@Component({
  selector: 'app-gist-list-view',
  templateUrl: './gist-list-view.component.html',
  styleUrls: ['./gist-list-view.component.css']
})
export class GistListViewComponent implements OnInit {
  gists = GISTS;
  constructor() {
    console.log('Gists', GISTS);
  }

  ngOnInit() {
  }

}

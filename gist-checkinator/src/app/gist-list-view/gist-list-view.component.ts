import { Component, OnInit } from '@angular/core';

import { GistService } from '../gist.service';

@Component({
  selector: 'app-gist-list-view',
  templateUrl: './gist-list-view.component.html',
  styleUrls: ['./gist-list-view.component.css']
})
export class GistListViewComponent implements OnInit {
  gists: Array<Object>;
  constructor(private gistService: GistService) {
  }
  
  ngOnInit() {
    this.gists = this.gistService.getData();
    // .then(function () {
      
      // })

    console.log('Gists', this.gists);
  }

}

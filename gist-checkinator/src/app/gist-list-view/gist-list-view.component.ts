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

  addEntry (gist) {
    this.gists.push(gist);
  }

  createGist (title: string, content: string) {
    this.gistService.createGist(title, content, '')
      .then(data => {
        console.log('SUCCESFUL CREATION LETS ADD TO GIST LIST VIEW!');
        this.addEntry(data);
      })
  }
  
  ngOnInit() {
    this.gistService.getData()
      .then((json) => {
        console.log('INITED ', json);
        this.gists = json;
      })
      
  }

}

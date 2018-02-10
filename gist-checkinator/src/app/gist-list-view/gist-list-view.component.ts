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

  addEntry (array, gist) {
    console.log('SPLICING OUT DELETING THING!');
    array.push(gist);
  }

  createGist (title: string, content: string) {
    console.log('CREATING', title, 'CONTENTS:', content);
    // Add the thing to gists
    // send request to gistService
    this.gistService.createGist(title, content, '')
      .then(data => {
        this.addEntry(this.gists, data);
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

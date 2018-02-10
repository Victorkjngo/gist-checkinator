import { Component, OnInit, Input } from '@angular/core';

import { GistService } from '../gist.service';

@Component({
  selector: 'app-gist-entry-view',
  templateUrl: './gist-entry-view.component.html',
  styleUrls: ['./gist-entry-view.component.css']
})
export class GistEntryViewComponent implements OnInit {
  @Input() gist: Object;
  @Input() gists: Object[]; // Need this to remove GistEntryView from GistListView upon deletion

  spliceEntryIfIdMatch (array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array.splice(i, 1);
        break;
      }
    }
  }

  deleteGist (id) {
    this.gistService.deleteGist(id);
  };

  constructor(private gistService: GistService) {
    
  }


  ngOnInit() {
    console.log('GIST ENTR INIT', this.gist);
    console.log('GIST ENTRY INITS: GIST username', this.gist.file_name);
  }

}

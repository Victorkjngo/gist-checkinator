import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gist-entry-view',
  templateUrl: './gist-entry-view.component.html',
  styleUrls: ['./gist-entry-view.component.css']
})
export class GistEntryViewComponent implements OnInit {
  @Input() gist: Object;
  constructor() {
    
  }

  ngOnInit() {
  }

}

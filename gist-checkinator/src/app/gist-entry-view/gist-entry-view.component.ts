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
    fetch('http://api.github.com/users/digital-promise-test/gists?access_token=ebe57335ca486b10e31b74e7a93e4596e36e932d')
    .then((response) => {
      console.log('response');
      this.gist = JSON.stringify(this.gist);  
      console.log('GIST', this.gist);
      })

  }

}

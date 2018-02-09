import { Injectable } from '@angular/core';

import { GISTS } from './mock-gists';

@Injectable()
export class GistService {

  constructor() { }

  getData() {
    return GISTS;
    /* TODO switch to async later! */
    // return fetch('http://api.github.com/users/digital-promise-test/gists?access_token=ebe57335ca486b10e31b74e7a93e4596e36e932d');
  }
}

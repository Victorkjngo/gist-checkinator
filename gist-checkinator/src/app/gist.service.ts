import { Injectable } from '@angular/core';

import { GISTS } from './mock-gists';

@Injectable()
export class GistService {

  constructor() { }

  deleteGist(id) {
    console.log('DELETING GIST', id);
    var options = {
      method: 'DELETE'
    };

    return fetch('https://api.github.com/gists/' + id + '?access_token=ebe57335ca486b10e31b74e7a93e4596e36e932d', options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('GIST DELETE FAILED');
        }
      })
      .catch((err) => {
        console.log('Wop whop, did something wrong...');
        return [];
      })
    
  }

  transformData (array) {
    // console.log('INCOMING ARRAY', array);
    return array.map(obj => {
      var owner = obj.owner;
      var files = obj.files;
      var file = files[Object.keys(files)[0]];

      var newObj =  {
        id: obj.id,
        url: obj.html_url,
        description: obj.description,
        owner: owner,
        username: owner.login,
        file: file,
        file_name: file.filename,
        content: file.content,
      };

      // console.log('SERVICE: NewObj', newObj.file_name);
      return newObj;
    });
  }

  getData() {
    // console.log('End result:', this.transformData(GISTS));
    console.log('Trying to get data from github...')
    return fetch('http://api.github.com/users/digital-promise-test/gists?access_token=ebe57335ca486b10e31b74e7a93e4596e36e932d')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('REQUEST FAILED');
        }
      })
      .then(this.transformData)
      .catch((err) => {
        console.log('Wop whop, did something wrong...');
        return [];
      })

    // return this.transformData(GISTS);
    /* TODO switch to async later! */
  }
}

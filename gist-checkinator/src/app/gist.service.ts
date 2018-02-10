import { Injectable } from '@angular/core';

import { GISTS } from './mock-gists';

@Injectable()
export class GistService {

  constructor() { }

  createGist (title: string, content: string, description: string) {
    console.log('CREATING', title, 'CONTENTS:', content);

    var payload = {
      public: true,
      files: {
        [title]: {
          content: content
        }
      }
    };

    var options = {
      method: 'POST',
      body: JSON.stringify(payload)
    };

    return fetch('https://api.github.com/gists?access_token=ebe57335ca486b10e31b74e7a93e4596e36e932d', options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('GIST GET FAILED');
        }
      })
      .then(data => this.transformDatum(data))
      .catch((err) => {
        console.log('Wop whop, did something wrong...');
        return [];
      })
  }
  
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

  transformDatum (obj) {
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

    return newObj;
  }

  transformData (array) {
    console.log('Transforming array', array);
    return array.map(this.transformDatum);
  }

  getData() {
    console.log('Trying to get data from github...')
    return fetch('https://api.github.com/users/digital-promise-test/gists?access_token=ebe57335ca486b10e31b74e7a93e4596e36e932d')
      .then((response) => {
        if (response.ok) {
          console.log('GET success!');
          return response.json();
        } else {
          console.log('REQUEST FAILED');
        }
      })
      .then((data) => {
        return this.transformData(data);
      })
      .catch((err) => {
        console.log('Wop whop, did something wrong...');
        console.error('ERROR:', err);
        return [];
      })

  }
}

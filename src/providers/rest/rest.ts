import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
  apiUrl = 'http://159.203.85.195/api/ionic';

  getProducts() {
    return new Promise(resolve => {
      //this.http.get(this.apiUrl+'/users').subscribe(data => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addDish(data) {
    return new Promise((resolve, reject) => {
      //this.http.post(this.apiUrl+'/users', JSON.stringify(data))
      this.http.post(this.apiUrl, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

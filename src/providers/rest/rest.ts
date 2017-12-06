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
  apiUrl = 'http://159.203.85.195/api';

  getCategories() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/categories?where=parent&where_eq=0').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getProducts(categoryid) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'products?limit=4&where=categoryid&where_eq='+categoryid).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}

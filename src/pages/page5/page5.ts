import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5Page {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getProducts(this.categoryid);
  }

  products: any;
  categoryid: any;

  getProducts(categoryid) {
    this.restProvider.getProducts(this.categoryid)
    .then(data => {
      this.products = data;
      console.log(this.products);
    });
  }
  
}

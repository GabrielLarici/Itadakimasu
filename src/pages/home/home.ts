import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getProducts();
  }
  products: any;

  getProducts() {
    this.restProvider.getProducts()
    .then(data => {
      this.products = data;
      console.log(this.products);
    });
  }

}

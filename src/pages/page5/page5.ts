import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DishInfoPage } from '../infopratos/infopratos';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5Page {
  goToPage5: any;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public restProvider: RestProvider, public navParams: NavParams) {
    this.goToPage5 = navParams.get("categoryid")
    this.getProducts(this.goToPage5);

  }

  products: any;

  getProducts(params) {
    this.restProvider.getProducts(params)
    .then(data => {
      this.products = data;
      console.log(this.products);
    });
  }
  
  goToDishInfo(params){
    this.navCtrl.push(DishInfoPage, {
      productid: params
    });
  }
}

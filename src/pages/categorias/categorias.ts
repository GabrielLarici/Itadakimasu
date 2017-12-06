import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page5Page } from '../page5/page5';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html'
})
export class CategoriasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getCategories();
  }
  categories: any;

  getCategories() {
    this.restProvider.getCategories()
    .then(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  goToPage5(params){
    if (!params) params = {};
    this.navCtrl.push(Page5Page);
  }
}
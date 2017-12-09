import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscarPage } from '../buscar/buscar';
import { CategoriasPage } from '../categorias/categorias';
import { PedidosPage } from '../pedidos/pedidos';
import { DishInfoPage } from '../infopratos/infopratos';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BuscarPage;
  tab2Root: any = CategoriasPage;
  tab3Root: any = PedidosPage;
  constructor(public navCtrl: NavController) {
  }
  
}

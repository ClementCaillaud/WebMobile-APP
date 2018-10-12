import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';
import { DetailsPage} from '../details/details';

@Component(
{
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage
{

  listeEvenements : Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider )
  {
    this.charger_evenements();
  }

  charger_evenements()
  {
    this.listeEvenements = this.apiProvider.charger_liste_evenements();
  }

  ouvrir_evenement(evenement: any)
  {
    this.navCtrl.push(DetailsPage, {evenement: evenement});
  }
}

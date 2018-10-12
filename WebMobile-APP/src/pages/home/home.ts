import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from './../../providers/api/api';
import { DetailsPage} from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{

  listeEvenements: any;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider)
  {
    this.charger_evenements();
  }

  charger_evenements()
  {
    this.listeEvenements = this.apiProvider.charger_evenements_aujourdui();
  }

  ouvrir_evenement(evenement: any)
  {
    this.navCtrl.push(DetailsPage, {evenement: evenement});
  }

}

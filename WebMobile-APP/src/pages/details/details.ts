import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage
{
  evenement : any;
  affichage: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.affichage = false;
    this.evenement = this.navParams.get("evenement");
  }

  toggle_description()
  {
    this.affichage = !this.affichage;
  }

}

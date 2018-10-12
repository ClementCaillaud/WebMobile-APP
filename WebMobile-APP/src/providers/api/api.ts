import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider
{

  htmlAPI : string;

  constructor(public http: HttpClient)
  {
    console.log('Hello ApiProvider Provider');
    this.htmlAPI = "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole";
  }

  charger_liste_evenements()
  {
    var nbResultats : number = 10;
    var adresse : string = this.htmlAPI + "&rows=" + nbResultats;

    return this.http.get(adresse);
  }

  charger_evenements_aujourdui()
  {
    var dateJour: any = new Date();
    var jour: string;
    var mois: string;

    if(dateJour.getDate() < 10)
    {
      jour = "0"+(dateJour.getDate());
    }
    else
    {
      jour = (dateJour.getDate());
    }

    if(dateJour.getMonth() + 1 < 10)
    {
      mois = "0"+(dateJour.getMonth() + 1);
    }
    else
    {
      mois = (dateJour.getMonth() + 1);
    }

    var dateFormatee: string = dateJour.getFullYear() + "-" + mois + "-" + jour;
    console.log(dateFormatee);
    var adresse: string = this.htmlAPI + "&facet=date&refine.date="+dateFormatee;

    return this.http.get(adresse);
  }

}

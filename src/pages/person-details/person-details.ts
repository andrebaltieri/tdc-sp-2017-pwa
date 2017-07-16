import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-person-details',
  templateUrl: 'person-details.html'
})
export class PersonDetailsPage {
  public person: any = {};
  
  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
    this.person = this.navParams.get('person');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

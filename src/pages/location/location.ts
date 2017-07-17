import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-location',
    templateUrl: 'location.html'
})

export class LocationPage {
    public location: string = '';
    constructor(private alertCtrl: AlertController) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((data) => {
                this.location = data.coords.latitude + ',' + data.coords.longitude;
                var html = '<iframe style="height: 100vh;" width="100%" height="99%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAcVhEk1X9Gkqwnx3sAYKNbr431gS5_L_g&origin=' + data.coords.latitude + ',' + data.coords.longitude + '&destination=Universidade+Anhembi+Morumbi" allowfullscreen></iframe>';
                document.getElementById('map').innerHTML = html;
            }, (err) => {
                this.showLocationError(err);
            });
        } else {
            this.showLocationError('');
        }

    }

    showLocationError(err) {
        let alert = this.alertCtrl.create({
            title: 'Ops, algo deu errado',
            subTitle: 'Não foi possível obter sua localização. ' + err.message,
            buttons: ['OK']
        });
        alert.present();
    }
}
import { Component } from '@angular/core';
@Component({
    selector: 'page-location',
    templateUrl: 'location.html'
})

export class LocationPage {
    constructor() {
        navigator.geolocation.getCurrentPosition((data) => {
            var html = '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAcVhEk1X9Gkqwnx3sAYKNbr431gS5_L_g&origin=Oslo+Norway&destination=Telemark+Norway" allowfullscreen></iframe>'
            console.log('https://www.google.com.br/maps/@' + data.coords.latitude + '' + data.coords.longitude);
        });
    }
}

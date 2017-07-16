import { Component } from '@angular/core';
import { Platform, NavController, ActionSheetController, ModalController } from 'ionic-angular';
import { PersonDetailsPage } from '../person-details/person-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public coordinators: any[] = [];

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
    this.coordinators.push({ name: 'André Baltieri', email: 'contato@andrebaltieri.net', image: 'assets/images/coordinators/andrebaltieri.jpg', company: 'balta.io', url: 'http://balta.io', bio: 'Microsoft MVP desde 2013, trabalha com aplicações Web desde 2013 tendo atuado em projetos de pequeno, médio e grande porte no Brasil e Estados Unidos. Apesar do grande vínculo com a Microsoft, é amante das tecnologias Open Source, onde atua boa parte do tempo. Atualmente trabalha com consultorias e treinamentos, tendo passado por inúmeras empresas no Brasil, e é CIO da plataforma de cursos online, balta.io.' })
    this.coordinators.push({ name: 'José Roberto Araújo', email: 'jroberto.araujo@gmail.com', image: 'assets/images/coordinators/joseroberto.jpg', company: 'Emerging Code', url: 'https://www.sympla.com.br/emerging-code', bio: 'A guy that is passionate to working with people, technology and innovation. I started my career fifteen years ago, when I decided to let a high school of Physical Education and I began to study HTML and Javascript by myself. This decisions was my first contact with programming and compunting. After months studying alone, I started to play around with compilers Turbo C and Turbo-Pascal and shortly after this, I began a Delphi Course and I manage got a diploma of Deplhi programmer. I worked with many Delphi versions a lot, since Delphi 3 until Delphi .NET. So, in 2005 I had the first contact with .NET framework and I began work with C#. Since this moment, I never stopped to work with it. I love work with Microsoft Products and its platforms.' })
  }

  showOptions(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: item.name,
      buttons: [
        { text: 'Enviar E-mail', icon: !this.platform.is('ios') ? 'mail' : null },
        { text: 'Acessar o Site', icon: !this.platform.is('ios') ? 'globe' : null },
        {
          text: 'Mais Informações', icon: !this.platform.is('ios') ? 'more' : null,
          handler: () => {
            this.showDetails(item);
          }
        }
      ]
    });
    actionSheet.present();
  }

  showDetails(item) {
    let modal = this.modalCtrl.create(PersonDetailsPage, { person: item });
    modal.present();    
  }

}

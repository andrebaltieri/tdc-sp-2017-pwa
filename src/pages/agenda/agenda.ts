import { Component } from '@angular/core';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {
  public agenda: any[] = [];

  constructor() {
    this.agenda.push({
      time: '08:00 às 09:00', activities: [
        { title: 'Credenciamento e Recepção', location: 'Recepção', person: null }
      ]
    });

    this.agenda.push({
      time: '09:00 às 10:00', activities: [
        { title: 'Abertura do Evento', location: 'Palco Principal', person: null }
      ]
    });

    this.agenda.push({
      time: '10:10 às 11:00', activities: [
        {
          title: 'Progressive Web Apps com Ionic', location: 'Stadium',
          person: { name: 'André Baltieri', email: 'contato@andrebaltieri.net', image: 'assets/images/coordinators/andrebaltieri.jpg', company: 'balta.io', url: 'http://balta.io', bio: 'Microsoft MVP desde 2013, trabalha com aplicações Web desde 2013 tendo atuado em projetos de pequeno, médio e grande porte no Brasil e Estados Unidos. Apesar do grande vínculo com a Microsoft, é amante das tecnologias Open Source, onde atua boa parte do tempo. Atualmente trabalha com consultorias e treinamentos, tendo passado por inúmeras empresas no Brasil, e é CIO da plataforma de cursos online, balta.io.' }
        }
      ]
    });

    this.agenda.push({
      time: '11:10 às 12:00', activities: [
        {
          title: 'Desenvolvimento mobile híbrido com Ionic 3', location: 'Sala Modern Web',
          person: { name: 'Loiane Groner', image: 'assets/images/speakers/loianegroner.jpg', bio: 'Possui 10+ anos de experiência em TI, trabalha como desenvolvedora FullStack em uma empresa multinacional e ama compartilhar conhecimento! Já palestrou por vários eventos no Brasil e ministrou cursos nos Estados Unidos. Autora de sete livros publicados pela editora Packt e lançados mundialmente em inglês (com tradução de alguns livros para chinês e coreano). Autora do livro Estrutura de Dados e Algoritmos em JavaScript lançado em português pela novatec. Entusiasta Java, Sencha, Angular e mobile híbrido (Phonegap/Ionic). Participa ativamente dessas comunidades. Escreve para o blog http://loiane.com e publica aulas e cursos em http://loiane.training.' }
        }
      ]
    });

    this.agenda.push({
      time: '12:10 às 13:00', activities: [
        {
          title: 'CSS Grid - Uma nova possibilidade', location: 'Sala Modern Web',
          person: { name: 'Alda Rocha', image: 'assets/icon.png', bio: 'Im a Senior UX designer, Web designer and Frontend developer with 10+ years of experience focusing on usability. I worked with digital agencies, startups, and big companies dealing with new medias, social networks and technology. I have developed projects as a UX designer, Web designer, Web developers and Art Director to many solids brands in Brazil and World. I talk about Web and UX in social channels, blogs, technology events. Im an activist of feminine and inclusive causes in technology.' }
        }
      ]
    });

    this.agenda.push({
      time: '13:10 às 14:00', activities: [
        {
          title: 'Intervalo para Almoço', location: '',
          person: null
        }
      ]
    });

    this.agenda.push({
      time: '14:10 às 15:00', activities: [
        {
          title: 'Microservices na Vida Real', location: 'Sala Modern Web',
          person: { name: 'Fabrício Sanchez', image: 'assets/images/speakers/fabriciosanchez.jpg', bio: 'Fabrício Lopes Sanchez has more than fifteen years of experience with software development, distributed applications, cloud architecture and teams management. He has a degree in Computer Science and a Master graduation in Electrical Engineering by University of São Paulo. He is a former ASP.NET/IIS and Azure MVP (Most Valuable Professional) named by Microsoft in January 2012. He worked as a university professor in technology undergraduate courses along six years. He worked as web solutions architect for seven years. He was product specialist (Microsoft Azure) at Microsoft Brazil for a good time, where worked on large projects using cloud computing platform from company. He was CEO of Conio Soluções em Tecnologia for three years.' }
        },
        {
          title: 'Modernizando plataformas e-Government : Lições e Método', location: 'Sala Modern Web',
          person: { name: 'Yan Justino', image: 'assets/images/speakers/yanjustino.jpg', bio: 'Profissional focado na adoção de boas práticas no desenvolvimento de software; há mais de 15 anos colaborando na construção de robustas soluções corporativas. Atualmente é arquiteto de software na Secretaria de Estado da Tributação do Governo do Rio Grande do Norte (em contrato pela IVIA), onde é responsável pelo planejamento de arquitetura e desenvolvimento de sistemas fazendários. Além disso, é aluno do Programa de Pós-Graduação em Engenharia de Software da Universidade Federal do Rio Grande do Norte. Sempre que possível, atua na comunidade como palestrante em eventos técnicos.' }
        }
      ]
    });

    this.agenda.push({
      time: '15:10 às 16:00', activities: [
        {
          title: 'Orquestrando APIs com Azure Logic App e Azure Functions', location: 'Sala Modern Web',
          person: { name: 'José Roberto Araújo', image: 'assets/images/coordinators/joseroberto.jpg', bio: 'A guy that is passionate to working with people, technology and innovation. I started my career fifteen years ago, when I decided to let a high school of Physical Education and I began to study HTML and Javascript by myself. This decisions was my first contact with programming and compunting. After months studying alone, I started to play around with compilers Turbo C and Turbo-Pascal and shortly after this, I began a Delphi Course and I manage got a diploma of Deplhi programmer. I worked with many Delphi versions a lot, since Delphi 3 until Delphi .NET. So, in 2005 I had the first contact with .NET framework and I began work with C#. Since this moment, I never stopped to work with it. I love work with Microsoft Products and its platforms.' }
        }
      ]
    });

    this.agenda.push({
      time: '16:00 às 16:30', activities: [
        {
          title: 'Coffee Break e Networking', location: '--',
          person: null
        }
      ]
    });

    this.agenda.push({
      time: '16:40 às 17:30', activities: [
        {
          title: 'Compartilhando código entre frontend e backend com Node.js', location: 'Sala Modern Web',
          person: { name: 'Giovanni Bassi', image: 'assets/images/speakers/giovannibassi.jpg', bio: 'Arquiteto e desenvolvedor, agilista, escalador, provocador. Programa porque gosta. Acredita que pessoas autogerenciadas funcionam melhor e por acreditar que heterarquia é melhor que hierarquia. Foi reconhecido Microsoft MVP depois que notaram que gostava de se envolver com a comunidade. Já palestrou sobre .NET, Ruby, Node.js, Front-end e Backend, Agile, etc. No Brasil, e no exterior. Lidera diversos grupos de usuários, como o Brasil .NET, o .NET Architects, e o Docker SP. É instrutor da Scrum.org e fundador da Lambda3.' }
        }
      ]
    });

    this.agenda.push({
      time: '17:40 às 18:30', activities: [
        {
          title: 'Performance na web: muito além do carregamento ', location: 'Sala Modern Web',
          person: { name: 'Fabio Rosato', image: 'assets/images/speakers/fabiorosato.jpg', bio: 'Fábio Rosato é Head of Professional Services da Sensedia. Com vasta experiência em Estratégias de Open APIs e Arquitetura Digitais, especialista em Projetos de Transformação de Modelos de Negócios através de APIs, tendo atuado com grandes bancos, seguradoras e empresas de pagamentos. Também é professor dos cursos de MBA em Engenharia de Software e Arquitetura Corporativa da DeVry.' }
        },
        {
          title: 'GraphQL na Era das APIs', location: 'Sala Modern Web',
          person: { name: 'Daniel Nardi Varanda', image: 'assets/images/speakers/danielnardi.jpg', bio: 'Atua há mais de 15 anos em projetos de TI, sendo os últimos 7 prestando consultoria em arquitetura de software em grandes corporações, contribuindo com aumento da maturidade das estratégias de APIs, Microservices e SOA. É pós-graduado em Engenharia de Software e MBA em Gestão de Projetos.' }
        }
      ]
    });

    this.agenda.push({
      time: '18:40 às 19:00', activities: [
        {
          title: 'Encerramento e Sorteios', location: '--',
          person: null
        }
      ]
    });
  }
}

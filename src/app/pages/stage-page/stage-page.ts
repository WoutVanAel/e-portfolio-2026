import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface Document {
  name: string;
  type: string;
  path: string;
}

@Component({
  selector: 'app-stage-page',
  imports: [MatIconModule],
  templateUrl: './stage-page.html',
  styleUrl: './stage-page.css',
})
export class StagePage {
  technologies: string[] = ['.NET Blazor', 'SQL', 'ASP.NET', 'Figma', 'Radzen Blazor Components', 'Git', 'PuppeteerSharp', 'Entity Framework Core', 'Scriban'];

  roles: string[] = [
    'Uitvoeren van de analyse van de applicatiebehoeften',
    'Ontwerpen van de applicatie en de gebruikersflow',
    'Opstellen van het database-diagram',
    'Ontwikkelen van de applicatie met Blazor',
    'Afstemmen met stakeholders om de vereisten en functionaliteit te verifiëren'
  ];

  timelineEvents: TimelineEvent[] = [
    { date: 'Week 1-2', title: 'Analyse', description: 'Projectplan opstellen en de organisatie leren kennen.' },
    { date: 'Week 3-6', title: 'Ontwikkeling aanmelding', description: '' },
    { date: 'Week 7-10', title: 'Ontwikkeling beheer', description: '' },
    { date: 'Week 11-12', title: 'Presentatie', description: 'Eindpresentatie en oplevering van het project.' },
  ];

  galleryImages: string[] = [
    'images/stage/knipsel%20admin%20dashboard.PNG',
    'images/stage/knipsel%20admin%20interne%20regels%20aanpassen.PNG',
    'images/stage/knipsel%20admin%20order%20type%20aanpassen.PNG',
    'images/stage/knipsel%20choose%20vehicle%20type.PNG',
    'images/stage/knipsel%20complete%20with%20signature.PNG',
    'images/stage/knipsel%20confirmation.PNG',
    'images/stage/knipsel%20digital%20checkins%20overzicht.PNG',
    'images/stage/knipsel%20email%20digitale%20aanmelding.jpg',
    'images/stage/knipsel%20feedback%20checkin%20completed.PNG',
    'images/stage/knipsel%20general%20info.PNG',
    'images/stage/knipsel%20keuze%20order%20type%20in%20het%20duits.png',
    'images/stage/knipsel%20keuze%20order%20type%20in%20het%20engels.png',
    'images/stage/knipsel%20keuze%20order%20type%20in%20het%20nederlands.png',
    'images/stage/knipsel%20running%20in%20staging.png',
  ];

  learnings: string[] = [
    'Inzicht gekregen in hoe een transportbedrijf applicaties ontwikkelt en implementeert',
    'Meer geleerd over de werking van het Belgian Cleaning Center (BCC)',
    'Ervaring opgedaan met het ontwikkelen van een Blazor-applicatie',
    'Probleemoplossende vaardigheden versterkt door het aanpakken van echte uitdagingen',
  ];

  documents: Document[] = [
    { name: 'Plan van aanpak Wout Van Ael V2.pdf', type: 'PDF', path: 'assets/stage/Plan van aanpak Wout Van Ael V2.pdf' },
    { name: 'Gheys - Realisatiedocument - Wout Van Ael - BCC - aanmeld- en administratieprogramma.pdf', type: 'PDF', path: 'assets/stage/Gheys - Realisatiedocument - Wout Van Ael - BCC - aanmeld- en administratieprogramma.pdf' },
    { name: 'Reflectie - Wout Van Ael - BBC - aanmeld- en administratie.pdf', type: 'PDF', path: 'assets/stage/Reflectie - Wout Van Ael - BBC - aanmeld- en administratie.pdf' },
  ];
}

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

interface Tools {
  name: string;
  type: string;
}

interface LinksAndResources {
  name: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-ui-ux-kinepolis-redesign-page',
  imports: [RouterLink, MatIconModule],
  templateUrl: './ui-ux-kinepolis-redesign-page.html',
  styleUrl: './ui-ux-kinepolis-redesign-page.css',
})
export class UiUxKinepolisRedesignPage {
  title: string = 'UI UX Kinepolis redesign';

  heroImage: string = 'images/projects/Kinepolis-redesign-cover-image.png';

  gallery: string[] = [
    'images/projects/kinepolis-redesign-gallerij/knipsel LoFi.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel HiFi.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel design system.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel homepage.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel kies cinema.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel kies film.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel kies tijdslot.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel login.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel registreer.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel kies ticket.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel kies stoel.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel email invullen.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel betaling.png',
    'images/projects/kinepolis-redesign-gallerij/knipsel download tickets.png',
  ];

  tools: Tools[] = [
  { name: 'Figma', type: 'Ontwerp / Prototyping' },
  { name: 'Coolors', type: 'Kleurenpalet / Design' },
];

  linksAndResources: LinksAndResources[] = [
    { name: 'Figma prototype link', icon: 'design_services', path: 'https://www.figma.com/proto/6C3fFAHhznzyVbHEhSomDU/Wireframing---prototyping?node-id=146-918&t=LzbgqhPOturITzaq-1', },
  ];
}

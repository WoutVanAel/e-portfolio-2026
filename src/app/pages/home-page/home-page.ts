import { Component } from '@angular/core';
import { SectionCard } from '../../components/section-card/section-card';

interface SectionItem {
  title: string;
  description: string;
  icon: string;
  path: string;
  color: string;
}

@Component({
  selector: 'app-home-page',
  imports: [SectionCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  sections: SectionItem[] = [
    {
      title: 'Over mij',
      description: 'Ontdek meer over mijn achtergrond, opleiding, vaardigheden en professionele mijlpalen.',
      icon: 'person',
      path: '/about-me',
      color: 'bg-blue-500',
    },
    {
      title: 'Stage project',
      description: 'Bekijk mijn stageopdracht, inclusief context, tijdlijn en belangrijkste leerpunten.',
      icon: 'work',
      path: '/stage',
      color: 'bg-green-500',
    },
    {
      title: 'Projecten',
      description: 'Blader door mijn portfolio van projecten en bekijk wat ik heb gemaakt.',
      icon: 'folder',
      path: '/projects',
      color: 'bg-purple-500',
    },
    {
      title: 'Contact',
      description: 'Neem contact met me op voor kansen, samenwerkingen of vragen.',
      icon: 'mail',
      path: '/contact',
      color: 'bg-orange-500',
    },
  ];
}

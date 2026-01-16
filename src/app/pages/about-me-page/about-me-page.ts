import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

interface Skill {
  name: string;
  level: number;
}

interface SoftSkill {
  name: string;
  icon: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-me-page',
  imports: [MatIconModule],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.css',
})
export class AboutMePage {
  education: Education[] = [
    {
      degree: 'Professionele bachelor Toegepaste Informatica',
      institution: 'Thomas More Geel',
      year: '2024 - 2026',
      description: 'Focus op applicatieontwikkeling',
    },
    {
      degree: 'Professionele bachelor Toegepaste Informatica',
      institution: 'PXL Hasselt',
      year: '2020 - 2024',
      description: 'Focus op applicatieontwikkeling',
    },
    {
      degree: 'TSO diploma in Elektronica-ICT',
      institution: 'Sint-Jozef Instituut Geel',
      year: '2014 - 2020',
      description: 'Raspberry Pi, Arduino, PCB, C++, PHP & meer',
    },
  ];

  skills: Skill[] = [
    { name: 'Spring Boot', level: 55 },
    { name: 'Asp.net', level: 80 },
    { name: 'Node.js', level: 65 },
    { name: 'Angular', level: 85 },
    { name: 'React & React Native', level: 80 },
    { name: 'Blazor', level: 80 },
    { name: 'PHP', level: 60 },
    { name: 'Flutter', level: 75 },
    { name: 'MAUI', level: 75 },
    { name: 'MongoDB', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Git & Version Control', level: 85 },
    { name: 'SQL & Databases', level: 70 },
    { name: 'UI/UX Design', level: 65 },
    { name: 'Linux', level: 85 },
    { name: 'Windows', level: 90 },
  ];

  softSkills: SoftSkill[] = [
    { name: 'Open-minded', icon: 'emoji_objects' },
    { name: 'Teamwork', icon: 'groups' },
    { name: 'Probleemoplossend', icon: 'psychology' },
    { name: 'Organisatie', icon: 'folder' },
    { name: 'Analytisch Denken', icon: 'analytics' },
    { name: 'Nieuwsgierigheid', icon: 'menu_book' },
  ];

  milestones: Milestone[] = [
    {
      year: '2025',
      title: 'Stage afgerond',
      description: 'Succesvol een stage van 3 maanden afgerond bij Gheys Transport',
    },
    {
      year: '2020',
      title: 'Start opleiding',
      description: 'Gestart met de opleiding Toegepaste Informatica',
    },
    {
      year: '2020',
      title: 'Middelbaar onderwijs afgerond',
      description: 'Behaald: TSO-diploma aan het Sint-Jozefinstituut Geel',
    },
    {
      year: '2019',
      title: 'Eerste website',
      description: 'Heb mijn eerste website gemaakt met html & css.',
    },
  ];
}

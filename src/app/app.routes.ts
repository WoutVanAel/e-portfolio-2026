import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutMePage } from './pages/about-me-page/about-me-page';
import { StagePage } from './pages/stage-page/stage-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { FlutterAnimalArGamePage } from './pages/projects/flutter-animal-ar-game-page/flutter-animal-ar-game-page';
import { MauiWasteSortingAppPage } from './pages/projects/maui-waste-sorting-app-page/maui-waste-sorting-app-page';
import { UiUxKinepolisRedesignPage } from './pages/projects/ui-ux-kinepolis-redesign-page/ui-ux-kinepolis-redesign-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'about-me',
        component: AboutMePage,
    },
    {
        path: 'stage',
        component: StagePage,
    },
    {
        path: 'projects',
        component: ProjectsPage,
    },
    {
        path: 'projects/flutter-animal-ar-game',
        component: FlutterAnimalArGamePage,
    },
    {
        path: 'projects/maui-waste-sorting-app',
        component: MauiWasteSortingAppPage,
    },
    {
        path: 'projects/ui-ux-kinepolis-redesign',
        component: UiUxKinepolisRedesignPage,
    },
    {
        path: 'contact',
        component: ContactPage,
    },
    {
        path: '**',
        redirectTo: '',
    },
];

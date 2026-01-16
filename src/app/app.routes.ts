import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutMePage } from './pages/about-me-page/about-me-page';
import { StagePage } from './pages/stage-page/stage-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { ContactPage } from './pages/contact-page/contact-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'over-mij',
        component: AboutMePage,
    },
    {
        path: 'stage',
        component: StagePage,
    },
    {
        path: 'projecten',
        component: ProjectsPage,
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

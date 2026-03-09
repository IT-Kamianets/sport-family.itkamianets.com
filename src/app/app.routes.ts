import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { GymComponent } from './pages/gym/gym';
import { PhytoBarComponent } from './pages/phyto-bar/phyto-bar';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gym', component: GymComponent },
  { path: 'phyto-bar', component: PhytoBarComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

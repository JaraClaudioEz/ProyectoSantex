import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotLoggedInGuard } from '../../core/guards/login/notloggedin/notloggedin.guard';

import { HogarComponent } from './hogar-page/hogar.component'
import { IndividuoComponent } from './individuo-page/individuo.component'
import { MainComponent } from './main-page/main.component'

const routes: Routes = [
  {
    path: 'principal',
    canActivate: [NotLoggedInGuard],
    component: MainComponent,
  },
  {
    path: 'hogar',
    canActivate: [NotLoggedInGuard],
    component: HogarComponent,
  },
  {
    path: 'individuo',
    canActivate: [NotLoggedInGuard],
    component: IndividuoComponent,
  },
  {
    path: '**',
    redirectTo: '/encuesta/principal'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestaRoutingModule { }

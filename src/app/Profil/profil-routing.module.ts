import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilHomeComponent } from './profil-home/profil-home.component';
import { ProfilPalmaresComponent } from './profil-palmares/profil-palmares.component';

const routes: Routes = [
  {path : '', 
  component: ProfilHomeComponent
  },
  {
    path:'palmares',
    component: ProfilPalmaresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }

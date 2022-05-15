import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilHomeComponent } from './profil-home/profil-home.component';
import { ProfilPalmaresComponent } from './profil-palmares/profil-palmares.component';


@NgModule({
  declarations: [
    ProfilHomeComponent,
    ProfilPalmaresComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
  ]
})
export class ProfilModule { }

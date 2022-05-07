import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournoisRoutingModule } from './tournois-routing.module';
import { TournoisHomeComponent } from './tournois-home/tournois-home.component';


@NgModule({
  declarations: [
    TournoisHomeComponent
  ],
  imports: [
    CommonModule,
    TournoisRoutingModule
  ]
})
export class TournoisModule { }

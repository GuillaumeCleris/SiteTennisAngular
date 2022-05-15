import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournoisRoutingModule } from './tournois-routing.module';
import { TournoisHomeComponent } from './tournois-home/tournois-home.component';
import { ArbreComponent } from './arbre/arbre.component';

import { NgttSingleEliminationTreeModule } from './arbre/single-elimination-tree/ngtt-single-elimination-tree.module';
import { MatchModule } from './arbre/match/match.module';


@NgModule({
  declarations: [
    TournoisHomeComponent,
    ArbreComponent
  ],
  imports: [
    CommonModule,
    TournoisRoutingModule,NgttSingleEliminationTreeModule,
    MatchModule
  ]
})
export class TournoisModule { }



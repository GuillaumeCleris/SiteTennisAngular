import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './tableau/tableau.component';
import { ClassementHomeComponent } from './classement-home/classement-home.component';
import { ClassementRoutingModule } from './classement-rooting.module';

@NgModule({
  declarations: [
    ClassementHomeComponent,
    TableauComponent
  ],
  imports: [
    CommonModule,
    ClassementRoutingModule
  ]
})
export class ClassementModule { }

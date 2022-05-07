import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassementHomeComponent } from './classement-home/classement-home.component';



const routes: Routes = [
  {path : '', 
  component: ClassementHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassementRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path:'planning', 
    loadChildren: () => 
      import('./planning/planning.module').then((m) => m.PlanningModule) 
  },
  { 
    path:'tournois', 
    loadChildren: () => 
      import('./tournois/tournois.module').then((m) => m.TournoisModule) 
  },
  { 
    path:'classement', 
    loadChildren: () => 
      import('./classement/classement.module').then((m) => m.ClassementModule) 
  },
  { 
    path:'le-club', 
    loadChildren: () => 
      import('./le-club/le-club.module').then((m) => m.LeClubModule) 
  },
  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

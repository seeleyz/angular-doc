import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'directive-learn',
    pathMatch: 'full'
  },
  {
    path: 'directive-learn',
    loadChildren: './directive-learn/directive-learn.module#DirectiveLearnModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }

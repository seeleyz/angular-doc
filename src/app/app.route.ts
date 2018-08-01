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
  },
  {
    path: 'template-syntax',
    loadChildren: './template-syntax/template-syntax.module#TemplateSyntaxModule'
  },
  {
    path: 'lifecycle-hooks',
    loadChildren: './lifecycle-hooks/lifecycle-hooks.module#LifecycleHooksModule'
  },
  {
    path: 'dynamic-component',
    loadChildren: './dynamic-component/dynamic-component.module#DynamicComponentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }

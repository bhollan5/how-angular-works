import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { WhatIsAngularComponent } from './what-is-angular/what-is-angular.component';
import { BasicsOfAngularComponent } from './basics-of-angular/basics-of-angular.component';
import { DirectInjectionsComponent } from './direct-injections/direct-injections.component';
import { AngularRouterComponent } from './angular-router/angular-router.component';
import { DeployingComponent } from './deploying/deploying.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'what-is-angular', component: WhatIsAngularComponent },
  { path: 'basics-of-angular', component: BasicsOfAngularComponent },
  { path: 'direct-injections', component: DirectInjectionsComponent },
  { path: 'angular-router', component: AngularRouterComponent },
  { path: 'deploying', component: DeployingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

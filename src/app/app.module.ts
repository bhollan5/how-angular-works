import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { WhatIsAngularComponent } from './what-is-angular/what-is-angular.component';
import { BasicsOfAngularComponent } from './basics-of-angular/basics-of-angular.component';
import { DirectInjectionsComponent } from './direct-injections/direct-injections.component';
import { AngularRouterComponent } from './angular-router/angular-router.component';
import { DeployingComponent } from './deploying/deploying.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WhatIsAngularComponent,
    BasicsOfAngularComponent,
    DirectInjectionsComponent,
    AngularRouterComponent,
    DeployingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

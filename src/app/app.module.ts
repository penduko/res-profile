import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing and navigation
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      MainContentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes, {enableTracing: false})
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

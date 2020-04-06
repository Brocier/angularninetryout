import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MaterialModule } from './library/material/material.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CounterComponent } from './views/counter/counter.component';
import { NavigationComponent } from './views/navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

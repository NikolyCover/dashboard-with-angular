import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PNavigationComponent } from './p-navigation/p-navigation.component';
import { PSensorsComponent } from './p-sensors/p-sensors.component';
import { PConfigComponent } from './p-config/p-config.component';
import { POwnersComponent } from './p-owners/p-owners.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PNavigationComponent,
    PSensorsComponent,
    PConfigComponent,
    POwnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

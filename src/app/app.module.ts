import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuFirstComponent } from './menu-first/menu-first.component';
import { MenuSecondComponent } from './menu-second/menu-second.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuFirstComponent, MenuSecondComponent, MenuComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

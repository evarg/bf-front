import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponentComponent } from './layout/left-menu-component/left-menu-component.component';
import { HeaderComponentComponent } from './layout/header-component/header-component.component';
import { FooterComponentComponent } from './layout/footer-component/footer-component.component';
import { SiedeBarComponentComponent } from './layout/siede-bar-component/siede-bar-component.component';
import { MainComponentComponent } from './layout/main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    SiedeBarComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

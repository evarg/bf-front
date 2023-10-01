import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponentComponent } from './layout/left-menu-component/left-menu-component.component';
import { HeaderComponentComponent } from './layout/header-component/header-component.component';
import { FooterComponentComponent } from './layout/footer-component/footer-component.component';
import { SiedeBarComponentComponent } from './layout/siede-bar-component/siede-bar-component.component';
import { MainComponentComponent } from './layout/main-component/main-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    SiedeBarComponentComponent,
    MainComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    LayoutComponent,
    DashboardComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { ClientsComponent } from './sites/Clients/clients/clients.component';
import { BuildingsComponent } from './sites/buildings/buildings.component';
import { ItemsComponent } from './sites/items/items.component';
import { ItemsGroupsComponent } from './sites/items-groups/items-groups.component';
import { ClientsAddComponent } from './sites/Clients/clients-add/clients-add.component';
import { ClientsNewComponent } from './sites/Clients/clients-new/clients-new.component';
import { ClientsViewComponent } from './sites/Clients/clients-view/clients-view.component';
import { ClientsEditComponent } from './sites/Clients/clients-edit/clients-edit.component';
import { ClientsDeleteComponent } from './sites/Clients/clients-delete/clients-delete.component';
import { BuildingsNewComponent } from './sites/buildings-new/buildings-new.component';
import { BuildingsViewComponent } from './sites/buildings-view/buildings-view.component';
import { BuildingsEditComponent } from './sites/buildings-edit/buildings-edit.component';
import { BuildingsDeleteComponent } from './sites/buildings-delete/buildings-delete.component';
import { ItemsNewComponent } from './sites/items-new/items-new.component';
import { ItemsViewComponent } from './sites/items-view/items-view.component';
import { ItemsDeleteComponent } from './sites/items-delete/items-delete.component';
import { ItemsEditComponent } from './sites/items-edit/items-edit.component';
import { ItemsGroupsNewComponent } from './sites/items-groups-new/items-groups-new.component';
import { ItemsGroupsEditComponent } from './sites/items-groups-edit/items-groups-edit.component';
import { ItemsGroupsViewComponent } from './sites/items-groups-view/items-groups-view.component';
import { ItemsGroupsDeleteComponent } from './sites/items-groups-delete/items-groups-delete.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { HttpClientModule } from '@angular/common/http';

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
    TermsComponent,
    ClientsComponent,
    BuildingsComponent,
    ItemsComponent,
    ItemsGroupsComponent,
    ClientsAddComponent,
    ClientsNewComponent,
    ClientsViewComponent,
    ClientsEditComponent,
    ClientsDeleteComponent,
    BuildingsNewComponent,
    BuildingsViewComponent,
    BuildingsEditComponent,
    BuildingsDeleteComponent,
    ItemsNewComponent,
    ItemsViewComponent,
    ItemsDeleteComponent,
    ItemsEditComponent,
    ItemsGroupsNewComponent,
    ItemsGroupsEditComponent,
    ItemsGroupsViewComponent,
    ItemsGroupsDeleteComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { BuildingsComponent } from './sites/buildings/buildings/buildings.component';
import { ItemsComponent } from './sites/items/items/items.component';
import { ItemsGroupsComponent } from './sites/items-groups/items-groups/items-groups.component';
import { ClientsAddComponent } from './sites/Clients/clients-add/clients-add.component';
import { ClientsNewComponent } from './sites/Clients/clients-new/clients-new.component';
import { ClientsViewComponent } from './sites/Clients/clients-view/clients-view.component';
import { ClientsEditComponent } from './sites/Clients/clients-edit/clients-edit.component';
import { ClientsDeleteComponent } from './sites/Clients/clients-delete/clients-delete.component';
import { BuildingsNewComponent } from './sites/buildings/buildings-new/buildings-new.component';
import { BuildingsViewComponent } from './sites/buildings/buildings-view/buildings-view.component';
import { BuildingsEditComponent } from './sites/buildings/buildings-edit/buildings-edit.component';
import { BuildingsDeleteComponent } from './sites/buildings/buildings-delete/buildings-delete.component';
import { ItemsNewComponent } from './sites/items/items-new/items-new.component';
import { ItemsViewComponent } from './sites/items/items-view/items-view.component';
import { ItemsDeleteComponent } from './sites/items/items-delete/items-delete.component';
import { ItemsEditComponent } from './sites/items/items-edit/items-edit.component';
import { ItemsGroupsNewComponent } from './sites/items-groups/items-groups-new/items-groups-new.component';
import { ItemsGroupsEditComponent } from './sites/items-groups/items-groups-edit/items-groups-edit.component';
import { ItemsGroupsViewComponent } from './sites/items-groups/items-groups-view/items-groups-view.component';
import { ItemsGroupsDeleteComponent } from './sites/items-groups/items-groups-delete/items-groups-delete.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressesComponent } from './sites/Addresses/addresses/addresses.component';
import { AddressesNewComponent } from './sites/Addresses/addresses-new/addresses-new.component';
import { AddressesEditComponent } from './sites/Addresses/addresses-edit/addresses-edit.component';
import { AddressesDeleteComponent } from './sites/Addresses/addresses-delete/addresses-delete.component';
import { AddressesViewComponent } from './sites/Addresses/addresses-view/addresses-view.component';
import { PersonsComponent } from './sites/persons/persons/persons.component';
import { PersonsNewComponent } from './sites/persons/persons-new/persons-new.component';
import { PersonsEditComponent } from './sites/persons/persons-edit/persons-edit.component';
import { PersonsDeleteComponent } from './sites/persons/persons-delete/persons-delete.component';
import { PersonsViewComponent } from './sites/persons/persons-view/persons-view.component';
import { NumbersComponent } from './sites/numbers/numbers/numbers.component';
import { NumbersNewComponent } from './sites/numbers/numbers-new/numbers-new.component';
import { NumbersEditComponent } from './sites/numbers/numbers-edit/numbers-edit.component';
import { NumbersViewComponent } from './sites/numbers/numbers-view/numbers-view.component';
import { NumbersDeleteComponent } from './sites/numbers/numbers-delete/numbers-delete.component';

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
    BreadcrumbsComponent,
    AddressesComponent,
    AddressesNewComponent,
    AddressesEditComponent,
    AddressesDeleteComponent,
    AddressesViewComponent,
    PersonsComponent,
    PersonsNewComponent,
    PersonsEditComponent,
    PersonsDeleteComponent,
    PersonsViewComponent,
    NumbersComponent,
    NumbersNewComponent,
    NumbersEditComponent,
    NumbersViewComponent,
    NumbersDeleteComponent
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

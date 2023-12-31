import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';
import { ClientsComponent } from './sites/Clients/clients/clients.component';
import { LayoutComponent } from './layout/layout.component';
import { BuildingsComponent } from './sites/buildings/buildings.component';
import { ItemsComponent } from './sites/items/items.component';
import { ItemsGroupsComponent } from './sites/items-groups/items-groups.component';
import { ClientsAddComponent } from './sites/Clients/clients-add/clients-add.component';
import { ClientsEditComponent } from './sites/Clients/clients-edit/clients-edit.component';
import { ClientsViewComponent } from './sites/Clients/clients-view/clients-view.component';
import { ClientsDeleteComponent } from './sites/Clients/clients-delete/clients-delete.component';
import { BuildingsNewComponent } from './sites/buildings-new/buildings-new.component';
import { ClientsNewComponent } from './sites/Clients/clients-new/clients-new.component';
import { BuildingsEditComponent } from './sites/buildings-edit/buildings-edit.component';
import { BuildingsViewComponent } from './sites/buildings-view/buildings-view.component';
import { BuildingsDeleteComponent } from './sites/buildings-delete/buildings-delete.component';
import { ItemsNewComponent } from './sites/items-new/items-new.component';
import { ItemsEditComponent } from './sites/items-edit/items-edit.component';
import { ItemsViewComponent } from './sites/items-view/items-view.component';
import { ItemsDeleteComponent } from './sites/items-delete/items-delete.component';
import { ItemsGroupsNewComponent } from './sites/items-groups-new/items-groups-new.component';
import { ItemsGroupsEditComponent } from './sites/items-groups-edit/items-groups-edit.component';
import { ItemsGroupsViewComponent } from './sites/items-groups-view/items-groups-view.component';
import { ItemsGroupsDeleteComponent } from './sites/items-groups-delete/items-groups-delete.component';

import { UserResolverService } from './services/user-resolver.service';
import { Breadcrumb } from './models/breadcrumb.model';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  { path: 'login', component: LoginComponentComponent },
  { path: 'register', component: RegisterComponentComponent },
  { path: 'terms', component: TermsComponent },

  {
    path: 'clients',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ClientsComponent,
        data: { breadcrumb: [{'label': "HW", 'link': "w pizdu"}]},
      },
      {
        path: 'add',
        component: ClientsNewComponent,
        data: { breadcrumb: (data: any) => { console.log (data)} },
      },
      { path: 'edit/:id', component: ClientsEditComponent },
      { path: 'view/:id', component: ClientsViewComponent },
      { path: 'delete/:id', component: ClientsDeleteComponent },
    ],
  },

  {
    path: 'buildings',
    component: LayoutComponent,
    children: [
      { path: '', component: BuildingsComponent },
      { path: 'add', component: BuildingsNewComponent },
      { path: 'edit/:id', component: BuildingsEditComponent },
      { path: 'view/:id', component: BuildingsViewComponent },
      { path: 'delete/:id', component: BuildingsDeleteComponent },
    ],
  },

  {
    path: 'items',
    component: LayoutComponent,
    children: [
      { path: '', component: ItemsComponent },
      { path: 'add', component: ItemsNewComponent },
      { path: 'edit/:id', component: ItemsEditComponent },
      { path: 'view/:id', component: ItemsViewComponent },
      { path: 'delete/:id', component: ItemsDeleteComponent },
    ],
  },

  {
    path: 'itemsgroups',
    component: LayoutComponent,
    children: [
      { path: '', component: ItemsGroupsComponent },
      { path: 'add', component: ItemsGroupsNewComponent },
      { path: 'edit/:id', component: ItemsGroupsEditComponent },
      { path: 'view/:id', component: ItemsGroupsViewComponent },
      { path: 'delete/:id', component: ItemsGroupsDeleteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

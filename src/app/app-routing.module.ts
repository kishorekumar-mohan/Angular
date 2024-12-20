import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJsonComponent } from './components/create-json/create-json.component';
import { ListJsonComponent } from './components/list-json/list-json.component';
import { DetailJsonComponent } from './components/detail-json/detail-json.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Components1Component } from './components/components1/components1.component';
import { RemittanceComponent } from './components/remittance/remittance.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntitydetailComponent } from './components/entitydetail/entitydetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/remittance', pathMatch: 'full' }, 
  { path: 'remittance', component: RemittanceComponent },
  {path:'create',component:CreateJsonComponent},
  {path:'list',component:ListJsonComponent},
  {path:'main',component:MainpageComponent},
  {path:'detail',component:DetailJsonComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'CreateformjsonComponent',component:Components1Component},
  {path:'EntityListComponent',component:EntityListComponent},
  {path:'EntitydetailComponent',component:EntitydetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

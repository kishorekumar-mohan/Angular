import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateJsonComponent } from './components/create-json/create-json.component';
import { ListJsonComponent } from './components/list-json/list-json.component';
import { DetailJsonComponent } from './components/detail-json/detail-json.component';
import { HttpClientModule } from '@angular/common/http';
import { Components1Component } from './components/components1/components1.component';
import { RemittanceComponent } from './components/remittance/remittance.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntitydetailComponent } from './components/entitydetail/entitydetail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CreateJsonComponent,
    ListJsonComponent,
    DetailJsonComponent,
    Components1Component,
    RemittanceComponent,
    MainpageComponent,
    EntityListComponent,
    EntitydetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

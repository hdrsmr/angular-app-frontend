import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {MenuAtasComponent} from './menu-atas/menu-atas.component';
import {MenuSampingComponent} from './menu-samping/menu-samping.component';
import {ProfilComponent} from './profil/profil.component';
import {AccordionModule, ModalModule} from 'ngx-bootstrap';
import {Route, RouterModule} from '@angular/router';
import {RekeningModule} from './rekening/rekening.module';
import {HttpModule} from '@angular/http';
import {TransferModule} from './transfer/transfer.module';


const routingAplikasi: Route[] = [
  {path: 'rekening', redirectTo: '/rekening', pathMatch: 'full'},
  {path: 'transfer', redirectTo: '/transfer', pathMatch: 'full'},
  {path: 'profil', component: ProfilComponent},
  {path: '**', component: MainLayoutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MenuAtasComponent,
    MenuSampingComponent,
    ProfilComponent

  ],

  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    RouterModule.forRoot(routingAplikasi),
    RekeningModule,
    TransferModule,
    HttpModule,
    ModalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

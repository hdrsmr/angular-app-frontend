import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTransferComponent} from './input-transfer/input-transfer.component';
import {KonfirmasiTransferComponent} from './konfirmasi-transfer/konfirmasi-transfer.component';
import {Route, RouterModule} from '@angular/router';
import {RekeningModule} from '../rekening/rekening.module';
import {FormsModule} from '@angular/forms';
import {DaftarTransferComponent} from './daftar-transfer/daftar-transfer.component';


const routingTransfer: Route[] = [
  {path: 'transfer/input', component: InputTransferComponent},
  {path: 'transfer/konfirmasi', component: KonfirmasiTransferComponent},
  {path: 'transfer/list', component: DaftarTransferComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingTransfer),
    RekeningModule,
    FormsModule

  ],
  declarations: [InputTransferComponent, KonfirmasiTransferComponent, DaftarTransferComponent]
})
export class TransferModule {
}

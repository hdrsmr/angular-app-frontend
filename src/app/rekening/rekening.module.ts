import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DaftarRekeningComponent} from './daftar-rekening/daftar-rekening.component';
import {MutasiRekeningComponent} from './mutasi-rekening/mutasi-rekening.component';
import {SaldoRekeningComponent} from './saldo-rekening/saldo-rekening.component';
import {Route, RouterModule} from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap';
import {PilihanRekeningComponent} from './pilihan-rekening/pilihan-rekening.component';
import {DetailRekeningComponent} from './detail-rekening/detail-rekening.component';


const RekeningRoute: Route[] = [
  {path: 'rekening/list', component: DaftarRekeningComponent},
  {path: 'rekening/mutasi', component: MutasiRekeningComponent},
  {path: 'rekening/saldo', component: SaldoRekeningComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RekeningRoute),
    BsDropdownModule.forRoot()

  ],
  declarations: [DaftarRekeningComponent,
    MutasiRekeningComponent,
    SaldoRekeningComponent,
    PilihanRekeningComponent,
    DetailRekeningComponent],

  exports: [PilihanRekeningComponent]
})
export class RekeningModule {
}

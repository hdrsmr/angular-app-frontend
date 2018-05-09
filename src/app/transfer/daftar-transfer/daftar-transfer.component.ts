import {Component, OnInit} from '@angular/core';
import {Transfer} from '../transfer.model';
import {TransferService} from '../transfer.service';
import {Rekening} from '../../rekening/rekening.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-daftar-transfer',
  templateUrl: './daftar-transfer.component.html',
  styleUrls: ['./daftar-transfer.component.css']
})
export class DaftarTransferComponent implements OnInit {

  daftarTransfer: Transfer[];

  constructor(private transferService: TransferService, private router: Router) {
    transferService.getAll().then(hasil => this.daftarTransfer = hasil);
  }

  hapus(transfer: Transfer) {
    this.transferService.hapus(transfer);
    this.router.navigate(['transfer/list']);
  }


  tampilkanDetail(rek: Rekening) {
    console.log('Menampilkan info rekening: ' + rek.nama);

  }

  ngOnInit() {
  }

}

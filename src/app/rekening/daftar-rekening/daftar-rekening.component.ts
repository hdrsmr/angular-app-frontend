import {Component, OnInit} from '@angular/core';
import {Rekening} from '../rekening.model';
import {RekeningService} from '../rekening.service';

@Component({
  selector: 'app-daftar-rekening',
  templateUrl: './daftar-rekening.component.html',
  styleUrls: ['./daftar-rekening.component.css']
})
export class DaftarRekeningComponent implements OnInit {


  daftarRekening: Rekening[];


  constructor(private rekeningService: RekeningService) {
    rekeningService.ambilDataRekening().then(hasil => this.daftarRekening = hasil).catch(this.handleError);
  }


  tampilkanDetail(rek: Rekening) {
    console.log('Menampilkan info rekening: ' + rek.nama);

  }

  private handleError(error: any): void {
    console.error('Terjadi Error Bray; ' + error);
  }

  ngOnInit() {
  }

}

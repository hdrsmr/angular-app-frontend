import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Rekening} from '../rekening.model';
import {RekeningService} from '../rekening.service';

@Component({
  selector: 'app-pilihan-rekening',
  templateUrl: './pilihan-rekening.component.html',
  styleUrls: ['./pilihan-rekening.component.css']
})
export class PilihanRekeningComponent implements OnInit {

  daftarRekening: Rekening[];

  @Output()
  pilihan = new EventEmitter<Rekening>();


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

  pilihRek(rek: Rekening) {
    console.log('Rekening: ' + rek.nama + ' dipilih');
    this.pilihan.emit(rek);

  }

}

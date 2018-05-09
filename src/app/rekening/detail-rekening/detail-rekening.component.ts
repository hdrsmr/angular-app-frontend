import {Component, Input, OnInit} from '@angular/core';
import {Rekening} from '../rekening.model';

@Component({
  selector: 'app-detail-rekening',
  templateUrl: './detail-rekening.component.html',
  styleUrls: ['./detail-rekening.component.css']
})
export class DetailRekeningComponent implements OnInit {

  @Input() pilihanRekening: Rekening;

  pilihRekening(rek: Rekening) {
    this.pilihanRekening = rek;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

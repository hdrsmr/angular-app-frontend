import {Rekening} from '../rekening/rekening.model';

export class Transfer {

  private sumber: Rekening;
  private tujuan: Rekening;
  private nilai: number;
  private berita: string;


  constructor(sumber: Rekening, tujuan: Rekening, nilai: number, berita: string) {
    this.sumber = sumber;
    this.tujuan = tujuan;
    this.nilai = nilai;
    this.berita = berita;
  }
}

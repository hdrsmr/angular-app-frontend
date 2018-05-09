import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Rekening} from './rekening.model';


@Injectable({
  providedIn: 'root'
})
export class RekeningService {

  private serverUrl = 'api/rekening/';

  constructor(private httpClient: Http) {
  }


  ambilDataRekening(): Promise<Rekening[]> {
    return this.httpClient.get(this.serverUrl)
      .toPromise()
      .then(hasil => hasil.json() as Rekening[]);

  }


}

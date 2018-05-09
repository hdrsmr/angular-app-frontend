import {Injectable} from '@angular/core';
import {Transfer} from './transfer.model';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private serverUrl = 'api/transfer/';
  private serverUrlDel = 'api/delete/';

  constructor(private httpClient: Http) {
  }


  getAll(): Promise<Transfer[]> {
    return this.httpClient.get(this.serverUrl)
      .toPromise()
      .then(hasil => hasil.json() as Transfer[]);

  }

  simpan(transfer: Transfer): Promise<void> {
    return this.httpClient.post(this.serverUrl, transfer).toPromise().then(() => {
      console.log('Sukses simpan data Transfer');
    })
      .catch(error => console.log('Error simpan data Transfer'));

  }


  hapus(transfer: Transfer): Promise<void> {
    return this.httpClient.post(this.serverUrlDel, transfer).toPromise().then(() => {
      console.log('Sukses Delete data Transfer');
    })
      .catch(error => console.log('Error delete data Transfer'));

  }
}

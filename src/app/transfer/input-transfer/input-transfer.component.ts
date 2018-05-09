import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Transfer} from '../transfer.model';
import {TransferService} from '../transfer.service';
import {ProgressIndicatorService} from '../../progress-indicator.service';

@Component({
  selector: 'app-input-transfer',
  templateUrl: './input-transfer.component.html',
  styleUrls: ['./input-transfer.component.css']
})
export class InputTransferComponent implements OnInit {

  transfer = new Transfer(undefined, undefined, 0, '');

  constructor(private router: Router,
              private transferService: TransferService,
              private progress: ProgressIndicatorService) {
  }

  lakukanTransfer(): void {
    this.progress.toggleIndiCator('Sedang Proses transfer');
    this.transferService.simpan(this.transfer).then(() => {
      this.progress.toggleIndiCator(null);
      this.router.navigate(['transfer/konfirmasi']);
    }).catch(error => {
      console.log('Gagal Transfer ' + error);
      this.progress.toggleIndiCator(null);
    });


  }

  get debugForm() {
    return JSON.stringify(this.transfer);
  }

  ngOnInit() {
  }

}

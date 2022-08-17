import { Component } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public output!: string;

  // @ViewChild('action', { static: true }) action: NgxScannerQrcodeComponent;
  // TODO something this.action

  public onError(e: any): void {
    alert(e);
  }
  title = 'pruebaQR';
}



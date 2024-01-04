import { Component, OnInit, ElementRef, } from '@angular/core';
import { SafeValue } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QRCodeComponent implements OnInit {
  constructor( private activated:ActivatedRoute, private route:Router){}
  url:string="";
  qrCodeDownloadLink: SafeValue= "";

  newQr(){
    this.route.navigate(["home"],{skipLocationChange:true});
  }
  onChangeURL(url: SafeValue) {
    this.qrCodeDownloadLink = url;
  }
  downloadQr(){
    
  }
  ngOnInit(): void {
    this.activated.queryParams.subscribe((response: any) => {
      this.url = response['url'];
    });
  }
  }
  

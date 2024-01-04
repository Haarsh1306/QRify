import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QRCodeComponent implements OnInit {
  constructor( private activated:ActivatedRoute, private route:Router){}
  url:string=""

  newQr(){
    this.route.navigate(["home"],{skipLocationChange:true});
  }
  ngOnInit(): void {
    this.activated.queryParams.subscribe((response: any) => {
      this.url = response['url'];
    });
  }
  }
  

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QRCodeComponent implements OnInit {
  constructor( private activated:ActivatedRoute){}
  url:string=""
  ngOnInit(): void {
    this.activated.queryParams.subscribe((response: any) => {
      this.url = response['url']
      console.log(this.url)
    });
  }
  }
  

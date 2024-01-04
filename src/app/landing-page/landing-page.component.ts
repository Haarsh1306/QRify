import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private router: Router){}
url:string=""

onClick(){
  let data = document.getElementById("userUrl") as HTMLInputElement
  if(data){
    let inputValue = data.value.trim()
    
    if(inputValue==="" || inputValue.length===0){
      data.placeholder= "Please enter a value"
    }else {
      this.url = data.value
      this.router.navigate(['qr-code'], {skipLocationChange:true, queryParams:{url:this.url}})
    }
  }

  

}
}


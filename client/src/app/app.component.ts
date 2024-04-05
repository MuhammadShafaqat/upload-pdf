import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';
  NGTOAUD : any = ''
   changeValue: any = ''
   rate: any = 498.404018

  selectedValue = 'AUD';
  imageUrl: string = '/assets/AUD.png';
  
  imageUrl1: string = '/assets/NGN.png';
  selectedValue1 = 'NGN';

  onChange(event: any) {
    const value = event.target.value;
    console.log(value);
    
    if (value === 'AUD') {
      this.changeValue = this.rate*this.NGTOAUD;
      this.selectedValue1 = 'NGN';
      this.imageUrl = '/assets/AUD.png';
      this.selectedValue = 'AUD';
      this.imageUrl1 = '/assets/NGN.png';
    } else if (value === 'NGN') {
      this.changeValue = this.NGTOAUD/this.rate
      this.selectedValue1 = 'AUD';
      this.imageUrl = '/assets/NGN.png';
      this.selectedValue = 'NGN';
      this.imageUrl1 = '/assets/AUD.png';
    }
  }

  ngToAud(){
    if(this.selectedValue === 'AUD'){
     this.changeValue = this.rate*this.NGTOAUD;
    }else if(this.selectedValue = 'NGN'){
     this.changeValue = this.NGTOAUD/this.rate
    }   
     }

  onChange1(event1: any) {
    const value = event1.target.value;
    if (value === 'AUD') {
      this.NGTOAUD = this.rate*this.changeValue;
      this.selectedValue1 = 'AUD';
      this.imageUrl1 = '/assets/AUD.png';
      this.selectedValue = 'NGN';
      this.imageUrl = '/assets/NGN.png';
    } else if (value === 'NGN') {
      this.NGTOAUD = this.changeValue/this.rate
      this.selectedValue1 = 'NGN';
      this.imageUrl1 = '/assets/NGN.png';
      this.selectedValue = 'AUD';
      this.imageUrl = '/assets/AUD.png';
    }
  }
  audToNg(){
    if(this.selectedValue1 === 'AUD'){
      this.NGTOAUD = this.rate*this.changeValue;
     }else if(this.selectedValue1 = 'NGN'){
      this.NGTOAUD = this.changeValue/this.rate
     } 
  }

    
}

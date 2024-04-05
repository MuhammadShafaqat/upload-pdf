import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent  implements OnInit{
responseData :any = [];

constructor(private http:HttpClient){

}

ngOnInit(): void {
  this.http.get("http://localhost:5000/get-files")
  .subscribe(
   (response:any) => {
    this.responseData = response.data
     console.log('Data:', this.responseData);
     // Handle success response as needed
   },
   (error) => {
     console.error('Error:', error);
     // Handle error response as needed
   }
 );

}
}

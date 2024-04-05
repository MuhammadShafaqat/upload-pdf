import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.css']
})
export class PdfUploadComponent implements OnInit {
  title !: string
  selectedFile !: File;

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    
  }

  formSubmit(){
    const formData: FormData = new FormData();
    formData.append('title', this.title);
    formData.append('file', this.selectedFile);

    // Create an object to hold form data for logging
 this.http.post("http://localhost:5000/upload-files", formData)
 .subscribe(
  (response) => {
    console.log('Success:', response);
    // Handle success response as needed
  },
  (error) => {
    console.error('Error:', error);
    // Handle error response as needed
  }
);

    console.log(formData);
  }




  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}

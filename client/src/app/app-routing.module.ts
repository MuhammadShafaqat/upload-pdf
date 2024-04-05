import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfUploadComponent } from './pdf-upload/pdf-upload.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';

const routes: Routes = [
  {path:'pdf-upload', component:PdfUploadComponent},
  {path:'pdf-view', component:PdfViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

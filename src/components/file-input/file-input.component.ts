import { Component } from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {
  
  public fileName:string|null = null;
  public extension:string|null = null;

  getFileNameOnchange(file:HTMLInputElement){
    const data = String(file.value).split('\\')
    const exten = String(file.value).split('.')

     this.fileName =data[data.length -1] ;
     this.extension = exten[exten.length -1]
  }

}

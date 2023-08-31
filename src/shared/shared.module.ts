import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { InputGroupComponent } from 'src/components/input-group/input-group.component';
import { FileInputComponent } from 'src/components/file-input/file-input.component';
import { DisabilityCheckboxComponent } from 'src/components/disability-checkbox/disability-checkbox.component';
import { FormActionComponent } from 'src/components/form-action/form-action.component';
import { TextAreaComponent } from 'src/components/text-area/text-area.component';
import { CalenderComponent } from 'src/components/calender/calender.component';
import { PresonalInfoComponent } from 'src/components/presonal-info/presonal-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputGroupComponent,
    FileInputComponent,
    DisabilityCheckboxComponent,
    FormActionComponent,
    TextAreaComponent,
    CalenderComponent,
    PresonalInfoComponent,
  


  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FormsModule,
    InputGroupComponent,
    FileInputComponent,
    DisabilityCheckboxComponent,
    TextAreaComponent,
    FormActionComponent,
    CalenderComponent,
    PresonalInfoComponent

  ]
})
export class SharedModule { }

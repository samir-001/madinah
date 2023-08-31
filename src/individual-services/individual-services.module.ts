import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { IndividualSevicesPageComponent } from 'src/pages/individual-sevices-page/individual-sevices-page.component';


const routes:Routes =[
  {path:'',component:IndividualSevicesPageComponent}
]
@NgModule({
  declarations: [
    IndividualSevicesPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class IndividualServicesModule { }

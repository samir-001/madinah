import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReserveAppointmentPageComponent } from 'src/pages/reserve-appointment-page/reserve-appointment-page.component';
import { SharedModule } from 'src/shared/shared.module';



const routes:Routes =[
  {path:'',component:ReserveAppointmentPageComponent}
]
@NgModule({
  declarations: [
    ReserveAppointmentPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ReserveAppointmentModule { 
  
}

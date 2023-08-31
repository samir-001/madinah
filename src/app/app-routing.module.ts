import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:'home',pathMatch:"full"},
  { path:"individualServices",loadChildren:()=>import('../individual-services/individual-services.module').then(m=>m.IndividualServicesModule)},
  { path:"reserveAppointment",loadChildren:()=>import('../reserve-appointment/reserve-appointment.module').then(m=>m.ReserveAppointmentModule)},
  { path:"query",loadChildren:()=>import('../query/query.module').then(m=>m.QueryModule)},
  {path:"**",redirectTo:'home',},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QueryPageComponent } from 'src/pages/query-page/query-page.component';
import { SharedModule } from 'src/shared/shared.module';
import { SearchComponent } from 'src/components/search/search.component';
import { RequestComponent } from 'src/components/request/request.component';


const routes:Routes=[
  {path:'',component:QueryPageComponent}
]

@NgModule({
  declarations: [
    QueryPageComponent,
    SearchComponent,
    RequestComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class QueryModule { }

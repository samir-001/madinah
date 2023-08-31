import { Component } from '@angular/core';

@Component({
  selector: 'app-query-page',
  templateUrl: './query-page.component.html',
  styleUrls: ['./query-page.component.scss']
})
export class QueryPageComponent {
  public data = {
    pageTitle:'استعلام عن طلبات',
    pageText:'خدمة تمكن العميل من رفع طلب مقابلة معالي الأمين تتم دراستة من خلال مركز خدمة العملاء',
    childComponentTitle:'البحث',
    childComponentText:'يمكنك الاستعلام عن طلب والبحث عليها من خلال رقم طلب و حالة الطلب تاريخ الطلب',
    childComponentIcon:'search.svg',
  }
}

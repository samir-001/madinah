import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public data = {
    pageTitle:'طلب مقابلة معالي الأمين',
    pageText:'خدمة تمكن العميل من رفع طلب مقابلة معالي الأمين تتم دراستة من خلال مركز خدمة العملاء',
    childComponentTitle:'متطلبات الخدمة',
    childComponentText:'برجاء الاطلاع علي متطلبات الخدمة قبل بداء تنفيذ الخدمة',
    childComponentIcon:'edit.svg',
  }
}

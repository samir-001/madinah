import { Component } from '@angular/core';

@Component({
  selector: 'app-individual-sevices-page',
  templateUrl: './individual-sevices-page.component.html',
  styleUrls: ['./individual-sevices-page.component.scss']
})
export class IndividualSevicesPageComponent {
  public data = {
    pageTitle:'طلب مقابلة معالي الأمين',
    pageText:'خدمة تمكن العميل من رفع طلب مقابلة معالي الأمين تتم دراستة من خلال مركز خدمة العملاء',
    childComponentTitle:'البيانات الشخصية',
    childComponentText:'برجاء الاطلاع علي متطلبات الخدمة قبل بداء تنفيذ الخدمة',
    childComponentIcon:'edit.svg',
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-reserve-appointment-page',
  templateUrl: './reserve-appointment-page.component.html',
  styleUrls: ['./reserve-appointment-page.component.scss']
})
export class ReserveAppointmentPageComponent {
  public data = {
    pageTitle:'حجز موعد الكتروني',
    pageText:'خدمة تمكن العميل من رفع طلب مقابلة معالي الأمين تتم دراستة من خلال مركز خدمة العملاء',
    childComponentTitle:'البيانات الشخصية',
    childComponentText:'برجاء الاطلاع علي متطلبات الخدمة قبل بداء تنفيذ الخدمة',
    childComponentIcon:'edit.svg',
  }
}

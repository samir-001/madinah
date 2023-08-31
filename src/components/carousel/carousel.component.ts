import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public carouselWidth!:Number | undefined
  public fullWidth!:Number | undefined
  constructor(){

    fromEvent(window,'resize').subscribe(()=>{
      this.carouselWidth = document.getElementById("carousel")?.offsetWidth
      this.fullWidth =  document.getElementById("carousel")?.scrollWidth 
    })

  }
  ngOnInit(): void {
    this.carouselWidth = document.getElementById("carousel")?.offsetWidth
    this.fullWidth =  document.getElementById("carousel")?.scrollWidth 
  }
  @ViewChild('carousel') carousel!:ElementRef
  scroll(direction:string){

    const target:ElementRef = this.carousel
    if( (Number(this.fullWidth) - Number(target.nativeElement.scrollLeft )  <= Number(this.carouselWidth)) && direction === "next" )
    {
      target.nativeElement.scrollTo({ left:0, behavior: 'smooth' });
    }
    else if ((Number(this.fullWidth) - Number(target.nativeElement.scrollLeft )-5  >= Number(this.carouselWidth)) && direction === "next" )
    {
      target.nativeElement.scrollTo({ left:-(target.nativeElement.scrollLeft + this.carouselWidth ), behavior: 'smooth' });
    }
    else if (Number(target.nativeElement.scrollLeft ) <= 0 && direction === "prev" )
    {
      target.nativeElement.scrollTo({ left:(Number(this.fullWidth) - Number(target.nativeElement.scrollLeft )), behavior: 'smooth' });
    }
    else if (Number(this.fullWidth) - Number(target.nativeElement.scrollLeft ) >= 0 && direction === "prev" )
    {
      target.nativeElement.scrollTo({ left:(target.nativeElement.scrollLeft - Number(this.carouselWidth) ), behavior: 'smooth' });
    }


  }

}

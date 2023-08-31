import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { StickerComponent } from 'src/components/sticker/sticker.component';
import { CarouselComponent } from 'src/components/carousel/carousel.component';
import { SharedModule } from 'src/shared/shared.module';
import { HomeComponent } from 'src/pages/home/home.component';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    StickerComponent,
    CarouselComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

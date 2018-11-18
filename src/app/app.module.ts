import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//Service
import { UserMediaService } from "./media/service/user-media.service";
//Component
import { AppComponent } from './app.component';
import { VideoComponent } from './media/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //UserMediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Observable, AsyncSubject } from 'rxjs';
import { timeout } from 'q';

const mediaParams = {
  audio: true, 
  video: true
}

@Injectable({
  providedIn: 'root'
})
export class UserMediaService {
  private userStream : MediaStream;
  private userStreamSubject : AsyncSubject<MediaStream> = new AsyncSubject();

  constructor() { 
    console.log("Start UserMediaService!");
    console.log("get user media");
    navigator.mediaDevices.getUserMedia(mediaParams)
      .then((stream) => {
        this.userStream = stream;
        this.userStreamSubject.next(this.userStream);
        this.userStreamSubject.complete();
        console.log("success get user Media");
        console.log(this.userStream);
      })
      .catch((err) => {
        console.log("failed get user Media :" + err);
      });
    
    console.log("End UserMediaService Constructor");
  }

  getUserStream() : AsyncSubject<MediaStream>{
    return this.userStreamSubject;
  }
}

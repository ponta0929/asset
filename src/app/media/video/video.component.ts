import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserMediaService } from "../service/user-media.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videoSrc;

  constructor(
    private userMediaService : UserMediaService
  ) { }

  ngOnInit() {
    console.log("on Init VideoComponent");
    this.userMediaService.getUserStream().subscribe(
      (userMedia : MediaStream) => {
        console.log("stream into video source");
        console.log(userMedia);
        this.videoSrc = userMedia;
      }
    )
  }

}

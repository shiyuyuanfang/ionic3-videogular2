import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VideoPlayPage } from '../video-play/video-play';  //视频播放页
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage{

  constructor(public navCtrl: NavController, public navParams: NavParams,) {

  }


  goVideoPlayPage(){
    this.navCtrl.push(VideoPlayPage);
  }

}

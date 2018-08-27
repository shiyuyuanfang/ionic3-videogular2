import { Component, ElementRef, ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the VideoPlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-play',
  templateUrl: 'video-play.html',
})
export class VideoPlayPage {
  @ViewChild('article') article:ElementRef;
  public tabs:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  //当将要进入页面时触发
  ionViewDidEnter() {
    this.tabs = document.getElementsByClassName("tabbar")[0];
    this.tabs.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabs = document.getElementsByClassName("tabbar")[0];
    this.tabs.style.display = 'flex';
  }

}

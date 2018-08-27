import { Component, ElementRef, Renderer, ViewChild  } from '@angular/core';
import { Events, Tabs } from 'ionic-angular';

import { VideoPage } from '../video/video';             //视频根页面
import { ResourcesPage } from '../resources/resources'; //资源根页面
import { CirclePage } from '../circle/circle';          //圈子根页面

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  mb: any;

  VideoPage = VideoPage;            //视频根页面
  ResourcesPage = ResourcesPage;    //资源根页面
  CirclePage = CirclePage;          //圈子根页面

  constructor(private elementRef: ElementRef, private renderer: Renderer, private event: Events) {

  }

  ionViewDidLoad() {
    //获取类名为.tabbar的标签(获取底部tab栏)
    let tabs = this.queryElement(this.elementRef.nativeElement, '.tabbar');
    console.log(tabs);

    //接收event数据 隐藏底部tab栏
    this.event.subscribe('hideTabs', () => {
      this.renderer.setElementStyle(tabs, 'display', 'none');
      // console.log(this.tabRef);
      // let SelectTab = this.tabRef.getSelected()._elementRef.nativeElement;
      // let content = this.queryElement(SelectTab, '.scroll-content');
      // this.mb = content.style['margin-bottom'];
      // this.renderer.setElementStyle(content, 'margin-bottom', '0')
    });

    // 接收event数据 显示底部tab栏
    this.event.subscribe('showTabs', () => {
      this.renderer.setElementStyle(tabs, 'display', '');
      // let SelectTab = this.tabRef.getSelected()._elementRef.nativeElement;
      // let content = this.queryElement(SelectTab, '.scroll-content');
      // this.renderer.setElementStyle(content, 'margin-bottom', this.mb)
    })
  }

  //自定义一个获取元素节点的函数
  queryElement(elem: HTMLElement, q: string): HTMLElement {
    return <HTMLElement>elem.querySelector(q);
  }




}

//根模块 告诉ionic如何组装应用

//引入 angular 以及ionic的系统模块
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//引入components模块
import { ComponentsModule } from '../components/components.module';

//ionic打包成app以后配置启动画面 以及导航条的服务
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//引入数据请求模块
import { HttpModule, JsonpModule} from '@angular/http';


import { MyApp } from './app.component';                      //引入根组件
import { TabsPage } from '../pages/tabs/tabs';                //底部导航

//页面 自定义的组件
import { VideoPage } from '../pages/video/video';             //视频根页面
import { ResourcesPage } from '../pages/resources/resources'; //资源根页面
import { CirclePage } from '../pages/circle/circle';          //圈子根页面
import { VideoPlayPage } from '../pages/video-play/video-play';  //视频播放页


//引入与videogular2视频播放组件相关的一些模块
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

@NgModule({
  declarations: [   /*申明组件*/
    MyApp,          //根组件
    TabsPage,       //底部导航
    VideoPage,      //视频根页面
    ResourcesPage,  //资源根页面
    CirclePage,     //圈子根页面
    VideoPlayPage,  //视频播放页
  ],
  imports: [  /*引入的模块 依赖的模块*/
    BrowserModule,
    ComponentsModule,
    HttpModule,
    JsonpModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true', //去掉二级子页面的底部导航栏
      backButtonText: '',         //去掉返回按钮的文字

    })
  ],
  bootstrap: [IonicApp],  /*启动的模块*/
  entryComponents: [   /*配置不会在模板中使用的组件*/
    MyApp,          //根组件
    TabsPage,       //底部导航
    VideoPage,      //视频根页面
    ResourcesPage,  //资源根页面
    CirclePage,     //圈子根页面
    VideoPlayPage,  //视频播放页
  ],
  providers: [   /*配置服务*/
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}

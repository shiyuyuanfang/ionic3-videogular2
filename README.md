This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.





## How to use this template:


```bash
    1、使用ionic3项目模板首先要配置ionic项目运行环境
    2、要配置环境先安装node.js(安装方法百度)
    3、node -v 查看是否安装成功
    4、npm -v 查看npm是否安装成功
    5、npm install -g cordova ionic 安装全局的 cordova 和 ionic
    6、ionic -v 查看ionic是否安装成功
    7、克隆该项目到本地
    8、cd到项目根目录
    9、npm install 安装依赖项
    10、ionic serve 运行该项目

注意：如果你的ionic环境都已经搭建完成，或者在你电脑上已经不止一次运行过ionic项目的情况下可以省略前六步直接执行7-10步查看项目（至于样式就靠你自己研究了）
```

如何将videogular2整合到ionic项目中
```bash
1. 使用 videogular2
  安装
  终端运行:

    npm install videogular2 --save
    npm install @types/core-js --save-dev


2、增加图标、字体支持
    videogular2 GitHub 地址：https://github.com/videogular/videogular2

    git clone 下来，将它的 fonts 文件夹 copy 到你的 Ionic 项目的www文件夹 assets 文件夹中（将字体文件放在www文件夹下再次编译时不会被覆盖），在 src文件加下的index.html 中引入 videogular 的 css 文件：

    <link rel="stylesheet" href="assets/fonts/videogular.css">

3、导入 module
在app.module.ts文件中导入依赖

    import {VgCoreModule} from 'videogular2/core';
    import {VgControlsModule} from 'videogular2/controls';
    import {VgOverlayPlayModule} from 'videogular2/overlay-play';
    import {VgBufferingModule} from 'videogular2/buffering';


    imports: [
      VgCoreModule,
      VgControlsModule,
      VgOverlayPlayModule,
      VgBufferingModule,
    ],

4、举个例子
  <vg-player>
    <vg-overlay-play></vg-overlay-play>
    <vg-buffering></vg-buffering>
    <vg-controls [vgAutohide]="true" [vgAutohideTime]="5">
    
      <vg-play-pause></vg-play-pause> <!--点击视频任意处暂停、播放-->
      
			<!--<vg-playback-button></vg-playback-button>--> <!--倍速播放-->
      
      <!-- vgProperty="current" 播放时间递增;vgProperty="left"播放时间递减 -->
      <vg-time-display [vgProperty]="'current'" vgFormat="mm:ss"></vg-time-display>
      
      <!--进度条 [vgSlider]="true" 显示滑块; [vgSlider]="false" 不显示滑块-->
      <vg-scrub-bar>
        <vg-scrub-bar-current-time [vgSlider]="true"></vg-scrub-bar-current-time>
        <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>
      </vg-scrub-bar>
      
      <vg-time-display [vgProperty]="'total'" vgFormat="mm:ss"></vg-time-display><!--视频总时长-->
      
      <!--声音按钮 声音 音量柱-->
      <!--<vg-mute></vg-mute>-->
      <!--<vg-volume></vg-volume>-->
      
      <!--全屏按钮-->
      <vg-fullscreen></vg-fullscreen>
      
    </vg-controls>
    <video #media [vgMedia]="media" poster="你的poster" src="你的src" autoplay></video>
    
  </vg-player>

5、注意：
      在第一步中执行命令 npm install videogular2 --save 时安装的是最新版本的videogular2，它是基于最新的angular版本，否做会报错的可能性较大。
      例如：我在初次接触videogular2时，我的ionic3项目基于angular4.x，但当时angular6刚刚发布，所以在执行npm install videogular2 --save后其实安装的  videogular2就已经是基于angular6了，所以在我的项目中就会报错，还好当时有一个大神与我遇到了同一个问题，经过他的研究得出在我angular4.x版本的ionic3项目中执行npm install videogular2@6.1.1 --save即指定安装的videogular2版本，不安装最新版本即可。



```



import { Component } from '@angular/core';

/**
 * Generated class for the ActionsheetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'actionsheet',
  templateUrl: 'actionsheet.html'
})
export class ActionsheetComponent {

  text: string;
  public list=[];

  constructor() {  /*初始化触发*/
    console.log('Hello ActionsheetComponent Component');
    this.text = 'Hello World';

    for(var i=0;i<15;i++){

      this.list.push('这是第'+i+'条数据');
    }
   
  }

}

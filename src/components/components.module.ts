import { NgModule } from '@angular/core';
import { ActionsheetComponent } from './actionsheet/actionsheet';


//引入BrowserModule  解决 ngFor报错的问题
import { BrowserModule } from '@angular/platform-browser';
import { UserlistComponent } from './userlist/userlist';


@NgModule({
	declarations: [ActionsheetComponent,
    UserlistComponent],
	imports: [BrowserModule],  /*依赖注入*/
	exports: [ActionsheetComponent,
    UserlistComponent]
})
export class ComponentsModule {}

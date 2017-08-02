import { Component, NgModule, Input } from '@angular/core';
import {RouterModule } from '@angular/router';
import  {MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { outletTitle1, outletTitle2, outletTitle3 } from './common/common.module';
import { } from '@types/node';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [  require('./app.component.scss').toString() ]


})  
export class AppComponent {
title = 'Sales Dashboard';
title1 : string = ' ';
title2 : string = ' ';
title3 : string = ' ';
   
}



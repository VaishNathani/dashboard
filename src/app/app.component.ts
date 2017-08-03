import { Component, NgModule, Input } from '@angular/core';
import {RouterModule } from '@angular/router';
import  {MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { } from '@types/node';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [  require('./app.component.scss').toString() ]


})  
export class AppComponent {
title = 'Sales Dashboard';

}



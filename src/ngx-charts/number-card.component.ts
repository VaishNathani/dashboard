import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {singleQty} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'number-card',
  template: `
    <ngx-charts-number-card
     
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="singleQty"
      (select)="onSelect($event)">
    </ngx-charts-number-card>
  `
})
export class NumberCardComponent {
  single: any[];
  multi: any[];

 //[view]="view"
 // view: any[] = [700, 400];

  scheme : string = scheme;
  schemetype : string = schemetype;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor() {
    Object.assign(this, {singleQty})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}
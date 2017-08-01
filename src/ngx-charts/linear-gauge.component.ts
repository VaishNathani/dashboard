import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'linear-gauge',
  template: `
    <ngx-charts-linear-gauge
      [view]="view"
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [value]="60"
      [previousValue]="80"
      [min]="0"
      [max]="100"
      [units]="'alerts'"
      (select)="onSelect($event)">
    </ngx-charts-linear-gauge>
  `
})
export class LinearGaugeComponent {
  view: any[] = [200, 100];
  data: any[];

  scheme : string = scheme;
  schemetype : string = schemetype;
  
  constructor() {
    this.data = single;
  }
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  
  onSelect(event) {
    console.log(event);
  }
}

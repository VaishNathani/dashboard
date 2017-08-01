import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, multi} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'pie-grid-chart',
  template: `
    <ngx-charts-pie-grid
     
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="result"
      (select)="onSelect($event)">
    </ngx-charts-pie-grid>
  `
})
export class PieGridChartComponent {
  single: any[];
  multi: any[];
  result: any[];

 // view: any[] = [700, 400];
 // [view]="view"
  scheme : string = scheme;
  schemetype : string = schemetype;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, {single}); 
    this.result = single;  
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}

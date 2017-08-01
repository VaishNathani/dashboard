import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, multi, opcoyearsval} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'normalized-horizontal-bar-chart',
  template: `
    <ngx-charts-bar-horizontal-normalized    
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="result"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-bar-horizontal-normalized>
  `
})
export class NormalizedHorizontalBarChartComponent {
  single: any[];
  multi: any[];
  result: any[];

  scheme : string = scheme;
  schemetype : string = schemetype;

   // [view]="view"
  //view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Operating Company';
  showYAxisLabel = true;
  yAxisLabel = 'Contribution';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi, opcoyearsval})  ;
    this.result = opcoyearsval;
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}
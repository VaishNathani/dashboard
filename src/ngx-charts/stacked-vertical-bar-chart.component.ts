import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, multi, storeyearsval} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'stacked-vertical-bar-chart',
  template: `
    <ngx-charts-bar-vertical-stacked
     
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
    </ngx-charts-bar-vertical-stacked>
  `
})
export class StackedVerticalBarChartComponent {
  single: any[];
  multi: any[];
  result: any[];

  scheme : string = scheme;
  schemetype : string = schemetype;

//   [view]="view"
 // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Stores';
  showYAxisLabel = true;
  yAxisLabel = 'Contribution';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi, storeyearsval});
    this.result =  storeyearsval;   
  }
  
  onSelect(event) {
    console.log(event);
  }
}


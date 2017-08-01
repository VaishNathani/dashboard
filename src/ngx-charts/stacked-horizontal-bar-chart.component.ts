import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, multi} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'stacked-horizontal-bar-chart',
  template: `
    <ngx-charts-bar-horizontal-stacked
      [view]="view"
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
    </ngx-charts-bar-horizontal-stacked>
  `
})
export class StackedHorizontalBarChartComponent {
  single: any[];
  multi: any[];
  result: any[];

  scheme : string = scheme;
  schemetype : string = schemetype;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'SuperCats';
  showYAxisLabel = true;
  yAxisLabel = 'Profits';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi});
    this.result = multi;  
  }
  
  onSelect(event) {
    console.log(event);
  }
}
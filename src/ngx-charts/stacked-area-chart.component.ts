import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, multi, supercatdatecomp} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'stacked-area-chart',
  template: `
    <ngx-charts-area-chart-stacked     
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
    </ngx-charts-area-chart-stacked>
  `
})
export class StackedAreaChartComponent {
  single: any[];
  multi: any[];
  supercatdatecomp: any[];
  result: any[]; 

  scheme : string = scheme;
  schemetype : string = schemetype;

  //view: any[] = [700, 400];

  //  [view]="view"

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Week Ending';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, {single, multi, supercatdatecomp});
    this.result = this.supercatdatecomp;  
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}
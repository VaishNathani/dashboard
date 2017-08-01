import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import { SalesEcom, single, multi } from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'line-chart',
  template: `
    <ngx-charts-line-chart    
       [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="results"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [customColors]="colorScheme"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale"
      (select)="onSelect($event)">
    </ngx-charts-line-chart>
  `
})
export class LineChartComponent {
  single: any[];
  multi: any[];
  SalesEcom: any[];
  results: any[];
  scheme : string = scheme;
  schemetype : string = schemetype;
  

//    [view]="view"   
  //view: any[] = [500, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  
  

  colorScheme = {
  //  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']

  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = false;
  
  constructor() {
    Object.assign(this, {single, multi,  SalesEcom});
    this.results = SalesEcom;   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}


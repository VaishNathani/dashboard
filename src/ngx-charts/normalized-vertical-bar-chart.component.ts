import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, multi, zoneyearsval} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'normalized-vertical-bar-chart',
  template: `
    <ngx-charts-bar-vertical-normalized
     
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
    </ngx-charts-bar-vertical-normalized>
  `
})
export class NormalizedVerticalBarChartComponent {
  single: any[];
  multi: any[];
  result: any[];

  scheme : string = scheme;
  schemetype : string = schemetype;

//  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Zone Managers';
  showYAxisLabel = true;
  yAxisLabel = 'Contribution';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi,  zoneyearsval});
    this.result = zoneyearsval;   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}


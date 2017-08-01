import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {multi} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';




@Component({
  selector: 'heat-map-chart',
  template: `
    <ngx-charts-heat-map
      [view]="view"
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="multi"
      [legend]="showLegend"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-heat-map>
  `
})
export class HeatMapComponent {
  single: any[];
  multi: any[];

  scheme : string = scheme;
  schemetype : string = schemetype;

  view: any[] = [700, 400];

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

  constructor() {
    Object.assign(this, {multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}
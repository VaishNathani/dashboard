import {Component, NgModule, Input, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, multi, MultiSupercatComp}  from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';



@Component({
  selector: 'grouped-vertical-bar-chart',
  template: `
    <ngx-charts-bar-vertical-2d
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="results"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical-2d>
  `
})
export class GroupedVerticalBarChartComponent {
  single: any[];
  multi: any[];
  MultiSupercatComp: any[];
  results: any[];

 //[view]="view"
  //view: any[] = [700, 400];

  scheme : string = scheme;
  schemetype : string = schemetype;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'SuperCat';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi, MultiSupercatComp});
    this.results = MultiSupercatComp;

  }
  
  onSelect(event) {
    console.log(event);
  }
  
}



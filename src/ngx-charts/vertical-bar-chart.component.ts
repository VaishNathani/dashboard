import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, stockturnYears} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';
import { RouterModule, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'vertical-bar-chart',
  template: `
    <ngx-charts-bar-vertical
      
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
    </ngx-charts-bar-vertical>
  `
})
export class VerticalBarChartComponent {
  single: any[];
  multi: any[];
  id: any = ' ';
  result: any[];

  scheme : string = scheme;
  schemetype : string = schemetype;

  //view: any[] = [700, 400];
  //[view]="view"

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

   constructor(private route: ActivatedRoute) {

  this.id = this.route.snapshot.params['id'];


 
 
 if (this.id === 'stockturnYears')    
  {
    Object.assign(this, {stockturnYears});   
    this.result =  stockturnYears
     
  } 
  else 
  {
     Object.assign(this, {single});
     this.result = single;
  }   
    
  }
 
 
}
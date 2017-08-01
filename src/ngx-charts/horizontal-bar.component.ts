import {Component, NgModule, Input, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {singleQty} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';
import { ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'horizontal-bar-chart',
  template: `
    <ngx-charts-bar-horizontal
     
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
    </ngx-charts-bar-horizontal>
  `
})
export class HorizontalBarChartComponent implements OnInit {
  single: any[];
  multi: any[];
  weeklymemberships: any[];

  // [view]="view"

  scheme : string = scheme;
  schemetype : string = schemetype;
  results : any[];
  id: any = ' ';

 // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Amount';
  showYAxisLabel = true;
  yAxisLabel = 'Date';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private activeRoute: ActivatedRoute) {

  this.id = this.activeRoute.snapshot.params['id'];
  Object.assign(this, {singleQty})   
  this.results = singleQty;
  }    
       
 
  onSelect(event) {
    console.log(event);
  }
  
 ngOnInit() {
  
        }


}


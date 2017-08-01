import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import { fourweeklymemberships, single } from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'gauge-chart',
  template: `
    <ngx-charts-gauge
      [view]="view"
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="result"
      [min]="0"
      [max]="100"
      [angleSpan]="240"
      [startAngle]="-120"
      [units]="'Memberships'"
      [bigSegments]="10"
      [smallSegments]="5"
      (select)="onSelect($event)">
    </ngx-charts-gauge>
  `
})
export class GaugeChartComponent {


  //view: any[] = [400, 250];
  result: any[];
  id: any = ' ';

  scheme : string = scheme;
  schemetype : string = schemetype;
  
  constructor(private route: ActivatedRoute) {

  this.id = this.route.snapshot.params['id'];

  Object.assign(this, {single,  fourweeklymemberships})    

  if (this.id === 'fourweeklymemberships')
  {
     this.result = fourweeklymemberships;
  } 
  else
  {
     this.result = single;
  }    
       
  } 
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  
  onSelect(event) {
    console.log(event);
  }
}


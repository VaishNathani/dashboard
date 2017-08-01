import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, multi, supercatsalesqty} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';




@Component({
  selector: 'pie-chart',
  template: `
    <ngx-charts-pie-chart      
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="result"
      [legend]="showLegend"
      [explodeSlices]="explodeSlices"
      [labels]="showLabels"
      [doughnut]="doughnut"
      [gradient]="gradient"
      (select)="onSelect($event)">
    </ngx-charts-pie-chart>
  `
})
export class PieChartComponent {
  single: any[];
  multi: any[];
  supercatsalesqty: any[];
  result: any[];

  scheme : string = scheme;
  schemetype : string = schemetype;

// [view]="view"
  //view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    Object.assign(this, {single, multi, supercatsalesqty});
    this.result = this.supercatsalesqty;   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}

import {Component, NgModule, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';


@Component({
  selector: 'tree-map',
  template: `
    <ngx-charts-tree-map
    
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="single"
      (select)="onSelect($event)">
    </ngx-charts-tree-map>
  `
})
export class TreeMapComponent {
  single: any[];
  multi: any[];

  scheme : string = scheme;
  schemetype : string = schemetype;

  //[view]="view"
 // view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}


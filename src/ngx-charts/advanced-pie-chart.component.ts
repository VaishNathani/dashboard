import {Component, NgModule, Input, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import {single, multi, weeklymemberships, supercatsalesval} from './data';
import { CommonModule, scheme, schemetype } from '../app/common/common.module';
import { RouterModule, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from "../../node_modules/rxjs/observable";


@Component({
  selector: 'advanced-pie-chart',
  template: `
    <ngx-charts-advanced-pie-chart     
      [scheme]="scheme"
      [schemeType] = "schemetype"
      [results]="result"
      [gradient]="gradient"
      (select)="onSelect($event)">
    </ngx-charts-advanced-pie-chart>
  `
})

export class AdvancedPieChartComponent implements OnInit {

 
  single: any[];
  multi: any[];
  supercatsalesval: any[];
  id : any = ' ';
  result : any[] = [];
  
  //view: any[] = [700, 400];
  // [view]="view"

  scheme : string =  scheme;
  schemetype : string = schemetype;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private route: ActivatedRoute) {

  this.id = this.route.snapshot.params['id'];

 if (this.id === 'supercatsalesval')    
  {
    Object.assign(this, {supercatsalesval});   
    this.result =  supercatsalesval;
     
  } 
  else if (this.id === 'weeklymemberships')
  {
     Object.assign(this, {weeklymemberships});
     this.result = weeklymemberships;
  } 
   else
  {
     Object.assign(this, {single});
     this.result = single;
  }    
       
  } 

  
  
 ngOnInit() {  
 
      
  }
  onSelect(event) {
    console.log(event);
  }
  

}


import { Component, NgModule, Input } from '@angular/core';
import { RouterModule,  ActivatedRoute, Router  } from '@angular/router';
import {MdGridListModule, MdListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { rowOpCo, rowStores, rowZoneMgr } from '../../ngx-charts/data';
import {Observable} from "../../../node_modules/rxjs";
import {kpiHeader1, kpiHeader2, kpiHeader3} from '../common/common.module';
import { } from '@types/node';




@Component({
   templateUrl : './kpi.component.html',
    styles: [ require('./kpi.component.scss').toString() ]
})
  
export class KPIComponent {

  rowOpCo: any[] = [];
  rowStores: any[] = [];
  rowZoneMgr: any[] = [];
  
  title1 : string = ' ';
  title2 : string = ' ';
  title3 : string = ' ';
  urlTree : any =  ' ';


constructor(private activeRoute: ActivatedRoute, private router: Router) {
  
        this.title1 = kpiHeader1;
        this.title2 = kpiHeader2;
        this.title3 = kpiHeader3;
        Object.assign(this, {rowOpCo, rowStores, rowZoneMgr});

        this.rowOpCo = rowOpCo;   
        this.rowStores = rowStores;
        this.rowZoneMgr = rowZoneMgr;

        this.urlTree = this.router.createUrlTree(['/KPI', {outlets: {primary: 'VerticalBarChart/stockturnYears'}}]);
        this.router.navigateByUrl(this.urlTree);    
        
   
 
  }

getTitles(event)
{

  
  var id : string = event.srcElement.offsetParent.id;

 
        this.title1 = kpiHeader1;
        this.title2 = kpiHeader2;
        this.title3 = kpiHeader3;
        Object.assign(this, {rowOpCo, rowStores, rowZoneMgr});

        this.rowOpCo = rowOpCo;   
        this.rowStores = rowStores;
        this.rowZoneMgr = rowZoneMgr;

        this.urlTree = this.router.createUrlTree(['/KPI', {outlets: {primary: 'VerticalBarChart/stockturnYears'}}]);
        this.router.navigateByUrl(this.urlTree);    
        
    
 
  

}

}




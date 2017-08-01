import { Component, NgModule, Input, OnInit } from '@angular/core';
import { RouterModule,  ActivatedRoute, Router  } from '@angular/router';
import {MdGridListModule, MdListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { rowOpCo, rowStores, rowZoneMgr } from '../../ngx-charts/data';
import {Observable} from "../../../node_modules/rxjs";
import { } from '@types/node';



@Component({
   templateUrl : './kpi.component.html',
    styles: [ require('./kpi.component.scss').toString() ]
})
  
export class KPIComponent implements OnInit {

  rowOpCo: any[] = [];
  rowStores: any[] = [];
  rowZoneMgr: any[] = [];
  
  title1 : string = ' ';
  title2 : string = ' ';
  title3 : string = ' ';
  urlTree : any =  ' ';


constructor(private activeRoute: ActivatedRoute, private router: Router) {
  
        this.title1 = 'Sales Instore vs Ecom (Of which is)';
        this.title2 =  "SuperCat Sales Performance (For given Date Period)";
        this.title3 = 'Stock Turn (Yearly Comparison)';
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

 
        this.title1 = 'Sales Instore vs Ecom (Of which is)';
        this.title2 =  "SuperCat Sales Performance (For given Date Period)";
        this.title3 = 'Stock Turn (Yearly Comparison)';
        Object.assign(this, {rowOpCo, rowStores, rowZoneMgr});

        this.rowOpCo = rowOpCo;   
        this.rowStores = rowStores;
        this.rowZoneMgr = rowZoneMgr;

        this.urlTree = this.router.createUrlTree(['/KPI', {outlets: {primary: 'VerticalBarChart/stockturnYears'}}]);
        this.router.navigateByUrl(this.urlTree);    
        
    
 
  

}
ngOnInit() { 

   
  }
}




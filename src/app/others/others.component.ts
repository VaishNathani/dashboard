import { Component, NgModule, Input, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import {othersHeader1, othersHeader2} from '../common/common.module';


@Component({
  templateUrl : './others.component.html'
 
  })
export class OthersComponent implements DoCheck {

   title1 : string = ' ';
   title2 : string = ' ';
   urlTree : any =  ' ';

   constructor(private router: Router, private activeRoute: ActivatedRoute) {
   
         
          this.title1 =  othersHeader1;
          this.title2 =  othersHeader2;

          this.urlTree = this.router.createUrlTree(['/Others', {outlets: {content1: 'PieChart', content2: 'AdvancedPieChart/supercatsalesval' }}]);
          this.router.navigateByUrl(this.urlTree);
           
 
}
 

  getTitles(event)
 {
 
 this.title1 = ' ';
 this.title2 = ' ';

var id : string = event.srcElement.offsetParent.id;
  
 switch(id)
   {
    case "SCatQty":
          this.title1 =  othersHeader1;
          this.title2 =  othersHeader2;
          break;
     case "SCatVal":
          this.title1 = 'Sales Comparison by SuperCat - Value ';
          this.title2 = '  ';
          break;
     case "SCatDate":
          this.title1 = 'Sales Comparison by SuperCat - Date ';
          this.title2 = '  ';
          break;
    case "YearwiseOpco":
          this.title1 = 'Yearwise Operating Co. Contribution';
          this.title2 = '  ';
          break;
    case "YearwiseZoneMgr":
          this.title1 = 'Yearwise Zone Manager Contribution';
          this.title2 = '  ';
          break;
    case "YearwiseStores":
          this.title1 = 'Yearwise Store/Location Contribution';
          this.title2 = '  ';
          break;
    case "ScatsProfits":
          this.title1 = 'SuperCat-wise Profit Analysis ';
          this.title2 = '  ';
          break;
    default:
          this.title1 = ' ';
          this.title2 = ' ';         
          break;   
   }

   
}

ngDoCheck(){
  
   var linkId: string = ' ';

   linkId = this.activeRoute.snapshot.queryParams['linkID'];  

   if (linkId === 'SCatQty')
      {
        this.title1 =  othersHeader1;
        this.title2 =  othersHeader2;
    
      }     
    
}
}


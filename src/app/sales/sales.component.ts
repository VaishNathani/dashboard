import { Component, NgModule, Input, DoCheck } from '@angular/core';
import {MdCardModule} from '@angular/material';
import { Router, ActivatedRoute  } from '@angular/router';
import {salesHeader1, salesHeader2} from '../common/common.module';

@Component({
  templateUrl : './sales.component.html'
})


export class SalesComponent implements DoCheck {
 
 title1 : string = ' ';
 title2 : string = ' ';

 urlTree : any = ' ';

constructor(private router: Router, private activeRoute: ActivatedRoute) {
       this.title1 = salesHeader1;
       this.title2 = salesHeader2;
       this.urlTree = this.router.createUrlTree(['/Sales', {outlets: {content1: 'NumberCard', content2: 'VerticalBarChart'}}]);
       this.router.navigateByUrl(this.urlTree);
      
  
}

getTitles(event)
{
 
 this.title1 = ' ';
 this.title2 = ' ';

var id : string = event.srcElement.offsetParent.id;

 switch(id)
   {
    case "Sales":
          this.title1 = salesHeader1;
          this.title2 = salesHeader2;
          break;
    case "SalesCash":
          this.title1 = 'Sales - Cash';
          this.title2 = ' ';
          break;
    case "SalesCard":
          this.title1 = 'Sales - Card';
          this.title2 = ' ';
          break;
    case "SalesCheque":
          this.title1 = 'Sales - Cheque';
          this.title2 = ' ';
          break;
    case "SalesExch":
          this.title1 = 'Sales - Exchange';
          this.title2 = ' ';
          break;
    case "NetSales":
          this.title1 = 'Net Sales - Quantity';
          this.title2 = 'Net Sales - Value';
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

   if (linkId === 'Sales')
      {
       this.title1 = salesHeader1;
       this.title2 = salesHeader2;
      }     
  }
}
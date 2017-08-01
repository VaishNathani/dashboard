import { Component, NgModule, Input } from '@angular/core';
import {MdCardModule} from '@angular/material';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  templateUrl : './sales.component.html'
})


export class SalesComponent {
 
 title1 : string = ' ';
 title2 : string = ' ';

 urlTree : any = ' ';

constructor(private router: Router, private activeRoute: ActivatedRoute) {
       this.title1 = 'Sales - Quantity';
       this.title2 = 'Sales - Value';
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
          this.title1 = 'Sales - Quantity';
          this.title2 = 'Sales - Value';
          this.urlTree = this.router.createUrlTree(['/Sales', {outlets: {content1: 'NumberCard', content2: 'VerticalBarChart'}}]);
          this.router.navigateByUrl(this.urlTree);
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
}
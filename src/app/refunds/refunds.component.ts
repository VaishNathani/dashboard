import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
   templateUrl : './refund.component.html'
  })
export class RefundsComponent {

title1 : string = ' ';
title2 : string = ' ';
urlTree : any =  ' ';

constructor(private router: Router, private activeRoute: ActivatedRoute) {
     this.title1 = 'Refund - Quantity';
     this.title2 = 'Refund - Value';
     this.urlTree = this.router.createUrlTree(['/Refunds', {outlets: {content1: 'NumberCard', content2: 'TreeMap'}}]);
     this.router.navigateByUrl(this.urlTree);
      
 }
 
  getTitles(event)
{
 
 this.title1 = ' ';
 this.title2 = ' ';

var id : string = event.srcElement.offsetParent.id;

 switch(id)
   {
    case "Refunds":
          this.title1 = 'Refund - Quantity';
          this.title2 = 'Refund - Value';
          this.urlTree = this.router.createUrlTree(['/Refunds', {outlets: {content1: 'NumberCard', content2: 'TreeMap'}}]);
          this.router.navigateByUrl(this.urlTree);
          break;
    case "RefundsCash":
          this.title1 = 'Refund - Cash';
          this.title2 = ' ';
          break;
    case "RefundsCard":
          this.title1 = 'Refund - Card';
          this.title2 = ' ';
          break;
    case "RefundsCheque":
          this.title1 = 'Refund - Cheque';
          this.title2 = ' ';
          break;
    case "RefundsExch":
          this.title1 = 'Refund - Exchange';
          this.title2 = ' ';
          break;
    default:
          this.title1 = ' ';
          this.title2 = ' ';
          break;
   }
      
 
}
  }


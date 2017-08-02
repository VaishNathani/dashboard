import { Component, NgModule, Input, DoCheck} from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import {refundsHeader1, refundsHeader2} from '../common/common.module';

@Component({
   templateUrl : './refund.component.html'
  })
export class RefundsComponent implements DoCheck {

title1 : string = ' ';
title2 : string = ' ';
urlTree : any =  ' ';

constructor(private router: Router, private activeRoute: ActivatedRoute) {
     this.title1 = refundsHeader1;
     this.title2 = refundsHeader2;
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
          this.title1 = refundsHeader1;
          this.title2 = refundsHeader2;
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
ngDoCheck(){
  
   var linkId: string = ' ';

   linkId = this.activeRoute.snapshot.queryParams['linkID'];  

if (linkId === 'Refunds')
      {
       this.title1 = refundsHeader1;
       this.title2 = refundsHeader2;
      }     
  }

}
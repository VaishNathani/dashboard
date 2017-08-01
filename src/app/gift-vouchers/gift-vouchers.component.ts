import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
   templateUrl : './gift-vouchers.component.html'
  })
export class GiftVouchersComponent {

 title1 : string = ' ';
 title2 : string = ' ';
 urlTree : any =  ' ';

 constructor(private router: Router, private activeRoute: ActivatedRoute) {
     this.title1 = 'Gift Vouchers - Quantity';
     this.title2 = 'Gift Vouchers - Value';
     this.urlTree = this.router.createUrlTree(['/GiftVouchers', {outlets: {content1: 'NumberCard', content2: 'TreeMap'}}]);
     this.router.navigateByUrl(this.urlTree);
  
}

 getTitles(event)
{
 
 this.title1 = ' ';
 this.title2 = ' ';

var id : string = event.srcElement.offsetParent.id;

 switch(id)
   {
    case "GiftVch":
          this.title1 = 'Gift Vouchers - Quantity';
          this.title2 = 'Gift Vouchers - Value';
          this.urlTree = this.router.createUrlTree(['/GiftVouchers', {outlets: {content1: 'NumberCard', content2: 'TreeMap'}}]);
           this.router.navigateByUrl(this.urlTree);
           break;
}
          
   }
    

}

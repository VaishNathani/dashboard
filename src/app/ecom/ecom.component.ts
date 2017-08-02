import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import {ecomHeader1, ecomHeader2} from '../common/common.module';

@Component({
  templateUrl : './ecom.component.html'
 
  })
export class EcomComponent {

  title1 : string = ' ';
  title2 : string = ' ';
  urlTree : any =  ' ';

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
      this.title1 = ecomHeader1;
      this.title2 = ecomHeader2;
      this.urlTree =  this.router.createUrlTree(['/Ecom', {outlets: {content1: 'HorizontalBarChart', content2: 'VerticalBarChart'}}]);
      this.router.navigateByUrl(this.urlTree);
   
 }

  getTitles(event)
{
 
 this.title1 = ' ';
 this.title2 = ' ';

var id : string = event.srcElement.offsetParent.id;

 switch(id)
   {
    case "Ecom":
          this.title1 = ecomHeader1;
          this.title2 = ecomHeader2;
          break;
     default:
          this.title1 = '';
          this.title2 = '';      
   }

  
}



}

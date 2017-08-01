import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  templateUrl : './ecom.component.html'
 
  })
export class EcomComponent {

  title1 : string = ' ';
  title2 : string = ' ';
  urlTree : any =  ' ';

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
      this.title1 = 'Ecom Sales - Quantity';
      this.title2 = 'Ecom Sales - Value';
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
          this.title1 = 'Ecom Sales - Quantity';
          this.title2 = 'Ecom Sales - Value';
           this.urlTree =  this.router.createUrlTree(['/Ecom', {outlets: {content1: 'HorizontalBarChart', content2: 'VerticalBarChart'}}]);
           this.router.navigateByUrl(this.urlTree);
          break;
   }

  
}



}

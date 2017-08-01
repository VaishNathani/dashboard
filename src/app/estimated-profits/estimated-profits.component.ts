import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({ templateUrl : './Estimated-profits.component.html'
  })
export class EstimatedProfitsComponent {
  title1 : string = ' ';
  title2 : string = ' ';
   urlTree : any =  ' ';

   

 constructor(private router: Router, private activeRoute: ActivatedRoute) {
   
    this.title1 = 'Estimated Profits - Quantity';
    this.title2 = 'Estimated Profits - Value';
    this.urlTree = this.router.createUrlTree(['/EstimatedProfits', {outlets: {content1: 'HorizontalBarChart', content2: 'VerticalBarChart'}}] );
     this.router.navigateByUrl(this.urlTree);
   

}
  getTitles(event)
{
 
 this.title1 = ' ';
 this.title2 = ' ';

var id : string = event.srcElement.offsetParent.id;

 switch(id)
   {
    case "EstProfits":
          this.title1 = 'Estimated Profits - Quantity';
          this.title2 = 'Estimated Profits - Value';
          this.urlTree = this.router.createUrlTree(['/EstimatedProfits', {outlets: {content1: 'HorizontalBarChart', content2: 'VerticalBarChart'}}] );
          this.router.navigateByUrl(this.urlTree);
          break;
    default:
          this.title1 = '';
          this.title2 = '';

   }

  
}


}

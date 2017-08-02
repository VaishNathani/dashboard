import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import {estProfitsHeader1, estProfitsHeader2} from '../common/common.module';


@Component({ templateUrl : './Estimated-profits.component.html'
  })
export class EstimatedProfitsComponent {
  title1 : string = ' ';
  title2 : string = ' ';
   urlTree : any =  ' ';

   

 constructor(private router: Router, private activeRoute: ActivatedRoute) {
   
    this.title1 = estProfitsHeader1;
    this.title2 = estProfitsHeader2;
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
          this.title1 = estProfitsHeader1;
          this.title2 = estProfitsHeader2;
          break;
    default:
          this.title1 = '';
          this.title2 = '';

   }

  
}


}

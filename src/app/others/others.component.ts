import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  templateUrl : './others.component.html'
 
  })
export class OthersComponent {

   title1 : string = ' ';
   title2 : string = ' ';
   urlTree : any =  ' ';

   constructor(private router: Router, private activeRoute: ActivatedRoute) {

          this.title1 = 'Sales Comparison by SuperCat- Quantity ';
          this.title2 = 'Sales Comparison by SuperCat - Value ';
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
          this.title1 = 'Sales Comparison by SuperCat- Quantity ';
          this.title2 = 'Sales Comparison by SuperCat - Value ';
          this.urlTree = this.router.createUrlTree(['/Others', {outlets: {content1: 'PieChart', content2: 'AdvancedPieChart/supercatsalesval' }}]);
          this.router.navigateByUrl(this.urlTree);
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
}


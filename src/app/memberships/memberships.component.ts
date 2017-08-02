import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import {membershipsHeader1, membershipsHeader2} from '../common/common.module';




@Component({
  templateUrl : './memberships.component.html'

})

export class MembershipsComponent {
title1 : string = ' ';
title2 : string = ' ';
urlTree : any =  ' ';
  


  constructor(private router: Router, private activeRoute: ActivatedRoute) {
     this.title1 = membershipsHeader1;
     this.title2 =  membershipsHeader2;
     this.urlTree = this.router.createUrlTree(['/Memberships', {outlets: {content1: 'AdvancedPieChart/weeklymemberships', content2: null}}]);
     this.router.navigateByUrl(this.urlTree);
   
  
}
 

  getTitles(event)
{
 
 this.title1 = ' ';
 this.title2 = ' ';

var id : string = event.srcElement.offsetParent.id;

 switch(id)
   {
    case "Memberships":
          this.title1 = membershipsHeader1;
          this.title2 =  membershipsHeader2;
          break;
    default:
          this.title1 = '';
          this.title2 = '';
   }

    
}

 



}
  
   





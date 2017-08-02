import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import {donationsHeader1, donationsHeader2} from '../common/common.module';

@Component({
  templateUrl : './donation.component.html'
  })
export class DonationComponent {
  title1: string = ' ';
  title2: string = ' ';
  urlTree: any =  ' ';

  constructor(private router: Router, private activeRoute: ActivatedRoute) {


     this.title1 = donationsHeader1;
     this.title2 = donationsHeader2;
     this.urlTree = this.router.createUrlTree(['/Donation', {outlets: {content1: 'NumberCard', content2: 'TreeMap'}}]);
     this.router.navigateByUrl(this.urlTree);
       
   }

  getTitles(event)
{
 
 this.title1 = ' ';
 this.title2 = ' ';
 
var id : string = event.srcElement.offsetParent.id;

  
 switch(id)
   {
    case "Donations":
          this.title1 = donationsHeader1;
          this.title2 = donationsHeader2;
          break;  
     default:
          this.title1 = '';
          this.title2 = '';      
          
   }
   
}


}



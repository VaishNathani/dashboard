import { Component, NgModule, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';




@Component({
  templateUrl : './memberships.component.html'

})

export class MembershipsComponent implements OnInit {
title1 : string = ' ';
title2 : string = ' ';
urlTree : any =  ' ';
  


  constructor(private router: Router, private activeRoute: ActivatedRoute) {
     this.title1 = 'Number of Memberships';
     this.title2 = '  ';
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
          this.title1 = 'Number of Memberships';
          this.title2 = '  ';
          this.urlTree = this.router.createUrlTree(['/Memberships', {outlets: {content1: 'AdvancedPieChart/weeklymemberships', content2: null}}]);
          this.router.navigateByUrl(this.urlTree);
          break;
   }

    
}

  ngOnInit() { 
 

  }
 



}
  
   





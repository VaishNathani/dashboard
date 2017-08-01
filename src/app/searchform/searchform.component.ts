import { Component, OnInit, Input, NgModule } from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { NgForOf } from '@angular/common';
import {OverlayContainer} from '@angular/material';
import { } from '@types/node';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styles: [ require('./searchform.component.scss').toString() ]
})

export class SearchformComponent implements OnInit {

searchForm: any;

ZoneMgrs: any[] = new Array("Andrew Rowles", "Barry Cassells", "Bartosz Radziszewski", "Byron Mark Williams", "Cian Evan Gaffney", "Kristopher Allison", "Mehboob Khan", "Michael Jung"); 
OpCos: any[] = new Array( "A & M Tech Limited",  "Zay Limited", "A.G.O Parker limited", "Actseum Limited", "Adam CeX Ltd" , "Ahmed Brothers Limited" , "Alucard Entertainment Ltd"); 
Cats: any[] = new Array("3DO", "3DS Accessories", "3DS Consoles", "3DS Software", "Acorn", "Amiga CD", "Apple iPad", "Apple iPod");
SuperCats: any[] =  new Array("Computing",  "DVD", "Electronics", "Gaming", "Music", "Other", "Phones", "Vision");
Years: any[] = new Array("2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010"); 
Stores: any[] =new Array("Portsmouth North End", "Aberdeen", "Accrington", "Acocks Green", "Actseum RMA", "Adam RMA centre", "Aldershot", "Altrincham");
WeekEndings: any[] = new Array("2017-07-07", "2017-06-30", "2017-06-23", "2017-06-16", "2017-06-09", "2017-06-02", "2017-05-26", "2017-05-19");
Weeks: any[] = [];
Type: any[] = new Array("2nd", "Donations", "Income", "Memberships", "New", "Payments");

Description: any[] = new Array( 
"1 - Sales", 
"101 - Memberships",
"11 - Ecom Sales (Of which is)",
"2 - Refunds",
"31 - Stock Adjustments at Cost",
"32 - Stock Variances at Cost",
"33 - Stock Adjustments",
"34 - Stock Variances",
"4 - VAT",
"41 - Sale Modifier",
"42 - Cash Purchases Modifier",
"43 - Exchange Purchases Modifier",
"5 - Opening Stock",
"512 - Opening Stock Cost",
"6 - Stock In",
"61 - Stock In Cost",
"7 - Purchases Cash",
"71 - Donations",
"8 - Purchases Exch",
"89 - Stock Out Cost",
"9 - Stock Out",
"91 - Closing Stock",
"912 - Closing Stock Cost",
"915 - Total Income",
"92 - Gift Vouchers Issued",
"921 - Sales Cash",
"922 - Sales Card",
"923 - Sales Cheque",
"924 - Sales Exchange",
"931 - Refund Cash",
"932 - Refund Card",
"933 - Refund Cheque",
"934 - Refund Exchange",
"97 - RMAs",
"98 - RMAs Cost",
"914 - Stock Turn",
"916 - Gross Margin",
"917 - Estimated Profit",
"918 - Yield",
"Net Sales"
)

 constructor(overlayContainer: OverlayContainer) {
    overlayContainer.themeClass = 'candy-app-theme';
    
 }

 getWeeksList() {

var ArrayWeeks: any[];    

for (var i = 0; i < 52; i++) {
   this.Weeks[i] = i+1;
}

} 

 ngOnInit() {

  this.getWeeksList();
   
  }

}




import { Component, OnInit, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForOf } from '@angular/common';
import {OverlayContainer} from '@angular/material';
import { } from '@types/node';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styles: [ require('./searchform.component.scss').toString() ]
})

export class SearchformComponent implements OnInit {

    

ZoneMgrs: any[] = new Array("Mike Rowles", "Avanti Garde", "Florence Goody", "Robin S Williams", "Evan Geoff", "Kristopher Mai", "Eddie Mitchel", "Laurent Madd"); 
OpCos: any[] = new Array( "L & V Tech Limited",  "ZayZee Limited", "Doro Perkins Ltd", "Lauseum Limited", "Eve Adam Ltd" , "Jason Brothers Limited" , "Martacard Entertainment Ltd"); 
Cats: any[] = new Array("Samsung Edge 6", "Samsung Galaxy Note 6", "Samsung Galaxy A8", "3DS Software", "Acorn", "Amiga CD", "Apple iPad", "Apple iPod");
SuperCats: any[] =  new Array("Computing",  "DVD", "Digital", "Games", "Music", "Other", "Mobiles", "Vision");
Years: any[] = new Array("2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010"); 
Stores: any[] =new Array("Portsmouth North End", "Aberdeen", "Accrington", "Acocks Green", "Actseum RMA", "Laurent RMA", "Aldershot", "Altrincham");
WeekEndings: any[] = new Array("2017-07-07", "2017-06-30", "2017-06-23", "2017-06-16", "2017-06-09", "2017-06-02", "2017-05-26", "2017-05-19");
Weeks: any[] = [];
Type: any[] = new Array("Second", "Donations", "Income", "Memberships", "New", "Payments");

Description: any[] = new Array( 
"Sales", 
"Memberships",
"Ecom Sales (Of which is)",
"Refunds",
"Stock Adjustments at Cost",
"Stock Variances at Cost",
"Stock Adjustments",
"Stock Variances",
"VAT",
"Sale Modifier",
"Cash Purchases Modifier",
"Exchange Purchases Modifier",
"Opening Stock",
"Opening Stock Cost",
"Stock In",
"Stock In Cost",
"Purchases Cash",
"Donations",
"Purchases Exch",
"Stock Out Cost",
"Stock Out",
"Closing Stock",
"Closing Stock Cost",
"Total Income",
"Gift Vouchers Issued",
"Sales Cash",
"Sales Card",
"Sales Cheque",
"Sales Exchange",
"Refund Cash",
"Refund Card",
"Refund Cheque",
"Refund Exchange",
"RMAs",
"RMAs Cost",
"Stock Turn",
"Gross Margin",
"Estimated Profit",
"Yield",
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




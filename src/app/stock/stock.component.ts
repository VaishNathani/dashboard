import { Component, NgModule, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
   templateUrl : './stock.component.html'
  })
export class StockComponent {

 title1 : string = ' ';
 title2 : string = ' ';
 urlTree : any = ' ';

 constructor(private router: Router, private activeRoute: ActivatedRoute) {
      this.title1 = 'Opening Stock - Quantity';
      this.title2 = 'Opening Stock - Value';
      this.urlTree = this.router.createUrlTree(['/Stock', {outlets: {content1: 'HorizontalBarChart', content2: 'VerticalBarChart'}}]);
      this.router.navigateByUrl(this.urlTree); 
          
}

getTitles(event)
{
 
 this.title1 = ' ';
 this.title2 = ' ';

var id : string = event.srcElement.offsetParent.id;

 switch(id)
   {
    case "OpStock":
          this.title1 = 'Opening Stock - Quantity';
          this.title2 = 'Opening Stock - Value';
           this.urlTree = this.router.createUrlTree(['/Stock', {outlets: {content1: 'HorizontalBarChart', content2: 'VerticalBarChart'}}]);
           this.router.navigateByUrl(this.urlTree); 
          break;
    case "OpStockCost":
          this.title1 = 'Opening Stock Cost - Quantity';
          this.title2 = 'Opening Stock Cost - Value';
          break;
    case "StockIn":
          this.title1 = 'Stock In - Quantity';
          this.title2 = 'Stock In - Value';
          break;
    case "StockInCost":
          this.title1 = 'Stock In Cost - Quantity';
          this.title2 = 'Stock In Cost - Value';
          break;
    case "PurCash":
          this.title1 = 'Purchases -  Cash';
          this.title2 = ' ';
          break;
    case "PurExch":
          this.title1 = 'Purchases - Exchange';
          this.title2 = ' ';
          break;
     case "StockAdj":
          this.title1 = 'Stock Adjustment - Quantity';
          this.title2 = 'Stock Adjustment - Value';
          break;
    case "StockAdjCost":
          this.title1 = 'Stock Adjustment Cost - Quantity';
          this.title2 = 'Stock Adjustment Cost - Value';
          break;
    case "StockOut":
          this.title1 = 'Stock Out - Quantity';
          this.title2 = 'Stock Out - Value';
          break;
    case "StockOutCost":
          this.title1 = 'Stock Out Cost  - Quantity';
          this.title2 = 'Stock Out Cost - Value';
          break;
     case "StockVar":
          this.title1 = 'Stock Variance - Quantity';
          this.title2 = 'Stock Variance - Value';
          break; 
     case "StockVarCost":
          this.title1 = 'Stock Variance Cost - Quantity';
          this.title2 = 'Stock Variance Cost - Value';
          break;         
     case "ClosStock":
          this.title1 = 'Closing Stock - Quantity';
          this.title2 = 'Closing Stock - Value';
          break;           
     case "ClosStockCost":
           this.title1 = 'Closing Stock Cost - Quantity';
           this.title2 = 'Closing Stock Cost - Value';
           break; 
    case "RMA":
           this.title1 = 'RMA - Quantity';
           this.title2 = 'RMA - Value';
           break; 
     case "StockTurn":
           this.title1 = 'Stock Turn - Quantity';
           this.title2 = 'Stock Turn - Value';
           break;                               
    default:
          this.title1 = ' ';
          this.title2 = ' ';
          break;
   }
  }

}
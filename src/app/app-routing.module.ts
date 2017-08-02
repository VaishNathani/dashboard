import {Component, NgModule, Input, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts/release';
import { AdvancedPieChartComponent } from '../ngx-charts/advanced-pie-chart.component';
import { AreaChartComponent } from '../ngx-charts/area-chart.component';
import { GroupedHorizontalBarChartComponent } from '../ngx-charts/grouped-horizontal.component';
import { GroupedVerticalBarChartComponent } from '../ngx-charts/grouped-vertical.component';
import { GaugeChartComponent } from '../ngx-charts/guage-chart.component';
import { HeatMapComponent } from '../ngx-charts/heat-map.component';
import { HorizontalBarChartComponent } from '../ngx-charts/horizontal-bar.component';
import { LineChartComponent } from '../ngx-charts/line-chart.component';
import { LinearGaugeComponent } from '../ngx-charts/linear-gauge.component';
import { NormalizedAreaChartComponent } from '../ngx-charts/normalized-area-chart.component';
import { NormalizedHorizontalBarChartComponent } from '../ngx-charts/normalized-horizontal-bar-chart.component';
import { NormalizedVerticalBarChartComponent } from '../ngx-charts/normalized-vertical-bar-chart.component';
import { NumberCardComponent } from '../ngx-charts/number-card.component';
import { PieChartComponent } from '../ngx-charts/pie-chart.component';
import { PieGridChartComponent } from '../ngx-charts/pie-grid-chart.component';
import { StackedAreaChartComponent } from '../ngx-charts/stacked-area-chart.component';
import { StackedHorizontalBarChartComponent } from '../ngx-charts/stacked-horizontal-bar-chart.component';
import { StackedVerticalBarChartComponent } from '../ngx-charts/stacked-vertical-bar-chart.component';
import { TreeMapComponent } from '../ngx-charts/tree-map.component';
import { VerticalBarChartComponent } from '../ngx-charts/vertical-bar-chart.component';
import { ErrorComponent } from '../app/error.component';
import { SalesComponent } from './sales/sales.component';
import { DonationComponent } from './donations/donation.component';
import { EcomComponent } from './ecom/ecom.component';
import { RefundsComponent } from './refunds/refunds.component';
import { EstimatedProfitsComponent } from './estimated-profits/estimated-profits.component';
import { KPIComponent } from './kpi/kpi.component';
import { GiftVouchersComponent } from './gift-vouchers/gift-vouchers.component';
import { StockComponent } from './stock/stock.component';
import { OthersComponent } from './others/others.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { SearchformComponent } from './searchform/searchform.component';
import { AppComponent } from './app.component';



import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'App', component: AppComponent },

   

  { path: 'Sales',  component:  SalesComponent,
                 
     children: [
               {
                           
                  path: 'NumberCard',
                 component: NumberCardComponent,
                 outlet: 'content1'
               },
                {
                 path: 'HorizontalBarChart',
                 component: HorizontalBarChartComponent,
                 outlet: 'content1'
               },
               {
                 path: 'VerticalBarChart',
                 component: VerticalBarChartComponent,
                 outlet: 'content1'
               },   
                {
                 path: 'TreeMap',
                 component: TreeMapComponent,
                 outlet: 'content1'
               },
               {
                 path: 'VerticalBarChart',
                 component: VerticalBarChartComponent,
                 outlet: 'content2'
               }   
             
     ]
  },
  { path: 'Donation', component: DonationComponent,
      children: [
               {
                 path: 'NumberCard',
                 component: NumberCardComponent,
                 outlet: 'content1'
               },
                {
                 path: 'TreeMap',
                 component: TreeMapComponent,
                 outlet: 'content2'
               }
                  
              ]
  },

  { path: 'Ecom',  component: EcomComponent,

    children: [
              {
                 path: '',
                 component: HorizontalBarChartComponent,
                 outlet: 'content1'
               },
                {
                 path: '',
                 component: VerticalBarChartComponent,
                 outlet: 'content2'
               },          
               {
                 path: 'HorizontalBarChart',
                 component: HorizontalBarChartComponent,
                 outlet: 'content1'
               },
                {
                 path: 'VerticalBarChart',
                 component: VerticalBarChartComponent,
                 outlet: 'content2'
               }              
              ]
},
  { path: 'Refunds', component: RefundsComponent,
    children: [
               {
                 path: 'NumberCard',
                 component: NumberCardComponent,
                 outlet: 'content1'
               },
               {
                 path: 'TreeMap',
                 component: TreeMapComponent,
                 outlet: 'content1'
               },
                {
                 path: 'TreeMap',
                 component: TreeMapComponent,
                 outlet: 'content2'
               },
                {
                 path: 'VerticalBarChart',
                 component: VerticalBarChartComponent,
                 outlet: 'content2'
               },
                {
                 path: 'HorizontalBarChart',
                 component:  HorizontalBarChartComponent,
                 outlet: 'content1'
               },
               {
                 path: 'PieGridChart',
                 component:  PieGridChartComponent,
                 outlet: 'content1'
               }
                  
              ]
  },

  { path: 'GiftVouchers' ,  component: GiftVouchersComponent,
  children: [
    
         {       path: 'NumberCard',
                 component: NumberCardComponent,
                 outlet: 'content1'
               },
                {
                 path: 'TreeMap',
                 component: TreeMapComponent,
                 outlet: 'content2'
               }
                  
              ]


},
  { path: 'Memberships', component: MembershipsComponent,
  
      children: [
                {
                 path: 'AdvancedPieChart/:id',
                 component: AdvancedPieChartComponent,
                 outlet: 'content1'
               }
               ]
  },
     
         
              
         
                 
  { path: 'Stock',  component: StockComponent,

   children: [
               {
                 path: 'HorizontalBarChart',
                 component: HorizontalBarChartComponent,
                 outlet: 'content1'
               },
               {
                 path: 'HorizontalBarChart',
                 component: HorizontalBarChartComponent,
                 outlet: 'content2'
               },
               {
                 path: 'VerticalBarChart',
                 component: VerticalBarChartComponent,
                 outlet: 'content1'
               },
                {
                 path: 'VerticalBarChart',
                 component: VerticalBarChartComponent,
                 outlet: 'content2'
               },

                {
                 path: 'NumberCard',
                 component: NumberCardComponent,
                 outlet: 'content1'
               },
               {
                 path: 'NumberCard',
                 component: NumberCardComponent,
                 outlet: 'content2'
               },
               {
                 path: 'AdvancedPieChart',
                 component: AdvancedPieChartComponent,
                 outlet: 'content1'
               },
               {
                 path: 'AdvancedPieChart',
                 component: AdvancedPieChartComponent,
                 outlet: 'content2'
               },
                {
                 path: 'PieChart',
                 component: PieChartComponent,
                 outlet: 'content1'
               },
               {
                 path: 'PieChart',
                 component: PieChartComponent,
                 outlet: 'content2'
               },
               {
                 path: 'PieGridChart',
                 component: PieGridChartComponent,
                 outlet: 'content1'
               },
                {
                 path: 'PieGridChart',
                 component: PieGridChartComponent,
                 outlet: 'content2'
               },

                {
                 path: 'TreeMap',
                 component: TreeMapComponent,
                 outlet: 'content1'
               },
                 {
                 path: 'TreeMap',
                 component: TreeMapComponent,
                 outlet: 'content2'
               }
                                   
                                                     
              ]


 },
  { path: 'KPI' , component: KPIComponent,
      children: [                          
                                    
                {
                  path: 'VerticalBarChart/:id',
                 component: VerticalBarChartComponent,
                 outlet: 'primary',
             
                },
               {
                 path: '',
                 component: LineChartComponent,
                 outlet: 'content1'
               },
               {
                 path: '',
                 component: GroupedVerticalBarChartComponent,
                 outlet: 'content2'
               },
                            
              ]
  },
    
  { path: 'EstimatedProfits',  component: EstimatedProfitsComponent ,
   children: [
               {
                 path: 'HorizontalBarChart',
                 component: HorizontalBarChartComponent,
                 outlet: 'content1'
               },
                {
                 path: 'VerticalBarChart',
                 component: VerticalBarChartComponent,
                 outlet: 'content2'
               }
                 
              ]


},

  { path: 'Others',  component: OthersComponent,

      children: [        
               {
                 path: 'PieChart',
                 component: PieChartComponent,
                 outlet: 'content1'
               },
                {
                 path: 'StackedAreaChart',
                 component: StackedAreaChartComponent,
                 outlet: 'content1'
               },
                {
                 path: 'AdvancedPieChart/:id',
                 component: AdvancedPieChartComponent,
                 outlet: 'content2'
               },
                {
                 path: 'NormalizedHorizontalBarChart',
                 component: NormalizedHorizontalBarChartComponent,
                 outlet: 'content1'
               },
               {
                 path: 'NormalizedVerticalBarChart',
                 component: NormalizedVerticalBarChartComponent,
                 outlet: 'content1'
               },
                 {
                 path: 'StackedVerticalBarChart',
                 component: StackedVerticalBarChartComponent,
                 outlet: 'content1'
               }, 
               {
                 path: 'StackedHorizontalBarChart',
                 component: StackedHorizontalBarChartComponent,
                 outlet: 'content1'
               }                      
              ]
  },
  { path: 'Searchform', component: SearchformComponent },

  { path: 'AdvancedPieChart/:id',  component: AdvancedPieChartComponent },
  { path: 'AreaChart', component: AreaChartComponent},
  { path: 'GroupedHorizontalBarChart',  component: GroupedHorizontalBarChartComponent },
  { path: 'GroupedVerticalBarChart', component: GroupedVerticalBarChartComponent },
  { path: 'GaugeChart',  component: GaugeChartComponent},
  { path: 'HeatMap', component: HeatMapComponent },
  { path: 'HorizontalBarChart',  component: HorizontalBarChartComponent },
  { path: 'LineChart', component: LineChartComponent },
  { path: 'LinearGauge',  component: LinearGaugeComponent },
  { path: 'NormalizedAreaChart', component: NormalizedAreaChartComponent },
  { path: 'NormalizedHorizontalBarChart',  component: NormalizedHorizontalBarChartComponent },
  { path: 'NormalizedVerticalBarChart', component: NormalizedVerticalBarChartComponent },
  { path: 'NumberCard',  component: NumberCardComponent  },
  { path: 'PieChart', component: PieChartComponent },
  { path: 'PieGridChart',  component: PieGridChartComponent },
  { path: 'StackedAreaChart', component: StackedAreaChartComponent },
  { path: 'StackedHorizontalBarChart',  component: StackedHorizontalBarChartComponent  },
  { path: 'StackedVerticalBarChart', component: StackedVerticalBarChartComponent },
  { path: 'TreeMap',  component: TreeMapComponent },
  { path: 'VerticalBarChart', component: VerticalBarChartComponent },
  { path: '',   redirectTo: '/Searchform',  pathMatch: 'full' }, 
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
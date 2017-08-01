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
import { RouterModule, Routes } from '@angular/router';
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
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';



import { AppComponent } from './app.component';
import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedPieChartComponent,
    AreaChartComponent,
    GroupedHorizontalBarChartComponent,
    GroupedVerticalBarChartComponent,
    GaugeChartComponent,
    HeatMapComponent,
    HorizontalBarChartComponent,
    LineChartComponent,
    LinearGaugeComponent,
    NormalizedAreaChartComponent,
    NormalizedHorizontalBarChartComponent,
    NormalizedVerticalBarChartComponent,
    NumberCardComponent,
    PieChartComponent,
    PieGridChartComponent,
    StackedAreaChartComponent,
    StackedHorizontalBarChartComponent,
    StackedVerticalBarChartComponent,
    TreeMapComponent,
    VerticalBarChartComponent,
    SalesComponent,
    EcomComponent,
    DonationComponent,
    RefundsComponent,
    GiftVouchersComponent,
    KPIComponent,
    StockComponent,
    MembershipsComponent,
    OthersComponent,
    EstimatedProfitsComponent,
    ErrorComponent,
    SearchformComponent   
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    NgxChartsModule,
    NgxDatatableModule,
    MaterialModule,
    FlexLayoutModule, 
    ReactiveFormsModule,
    RouterModule, 
    AppRoutingModule    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

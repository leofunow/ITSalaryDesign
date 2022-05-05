import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EmployeeComponent } from './employee/employee.component';
import { MainTableComponent } from './main-table/main-table.component';
import {FormsModule} from "@angular/forms";
import { EventsTableComponent } from './tables/employee/events-table/events-table.component';
import { ProjectsTableComponent } from './tables/employee/projects-table/projects-table.component';
import { AcceptedPaymentsTableComponent } from './tables/main/accepted-payments-table/accepted-payments-table.component';
import {RouterModule, Routes} from "@angular/router";
import { PurchasesTableComponent } from './tables/employee/purchases-table/purchases-table.component';
import { ReportsTableComponent } from './tables/employee/reports-table/reports-table.component';
import { MyPaymentsTableComponent } from './tables/main/my-payments-table/my-payments-table.component';
import { SummaryTableComponent } from './tables/employee/summary-table/summary-table.component';
import { ExpectedPaymentsTableComponent } from './tables/main/expected-payments-table/expected-payments-table.component';

const appRoutes: Routes =[
  {path:'', component: MainTableComponent},
  {path:'emp', component: EmployeeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    MainTableComponent,
    EventsTableComponent,
    ProjectsTableComponent,
    AcceptedPaymentsTableComponent,
    PurchasesTableComponent,
    ReportsTableComponent,
    MyPaymentsTableComponent,
    SummaryTableComponent,
    ExpectedPaymentsTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

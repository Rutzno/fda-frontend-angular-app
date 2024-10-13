import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderSummaryComponent} from "./components/order-summary.component";

/**
 * @author Mack_TB
 * @since 04/10/2024
 * @version 1.0.0
 */

const routes: Routes = [
  { path: 'orderSummary', component: OrderSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSummaryRoutingModule { }

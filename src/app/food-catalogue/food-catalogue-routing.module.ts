import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodCatalogueComponent} from "./components/food-catalogue.component";

/**
 * @author Mack_TB
 * @since 04/10/2024
 * @version 1.0.0
 */

const routes: Routes = [
  { path: "foodCatalogue/:id", component: FoodCatalogueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodCatalogueRoutingModule { }

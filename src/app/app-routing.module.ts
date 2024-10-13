import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * @author Mack_TB
 * @since 03/10/2024
 * @version 1.0.0
 */

const routes: Routes = [
  { path: "", redirectTo: "restaurant-listing", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

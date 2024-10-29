import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {K8sExternalIP} from "../../constants/url";
import {catchError, Observable, throwError} from "rxjs";
import {FoodCataloguePage} from "../../shared/model/foodcataloguepage.model";

/**
 * @author Mack_TB
 * @since 04/10/2024
 * @version 1.0.0
 */

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {
  private apiURL = K8sExternalIP + "/foodCatalogue/fetchRestaurantAndFoodItemsByRestaurantID/"

  constructor(private http: HttpClient) { }

  public getFoodItemsAndRestaurantByID(id: number): Observable<FoodCataloguePage> {
    return this.http.get<FoodCataloguePage>(this.apiURL + id)
                    .pipe(catchError(this.handleError))
  }

  private handleError(error: any) {
    console.log("An error occurred: ", error);
    return throwError(error.message || error)
  }
}

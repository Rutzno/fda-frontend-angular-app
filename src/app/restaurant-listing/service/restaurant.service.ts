import { Injectable } from '@angular/core';
import {API_URL_RESTAURANT} from "../../constants/url";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

/**
 * @author Mack_TB
 * @since 03/10/2024
 * @version 1.0.0
 */

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiURL = API_URL_RESTAURANT + "/restaurant/restaurants"

  constructor(private http: HttpClient) { }

  public getRestaurants(): Observable<any> {
    return this.http.get<any>(this.apiURL)
                    .pipe(catchError(this.handleError))
  }

  private handleError(error: any) {
    console.log("An error occurred: ", error);
    return throwError(error.message || error)
  }
}

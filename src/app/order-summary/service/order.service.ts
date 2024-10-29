import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {K8sExternalIP} from "../../constants/url";
import {Observable, throwError} from "rxjs";

/**
 * @author Mack_TB
 * @since 04/10/2024
 * @version 1.0.0
 */

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = K8sExternalIP +'/order/orders';

  constructor(private http: HttpClient) { }

  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'text/plain',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  };*/

  createOrder(data: any):Observable<any>  {
    return this.http.post<any>(this.apiUrl, data);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }

}

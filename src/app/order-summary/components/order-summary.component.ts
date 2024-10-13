import {Component, OnInit} from '@angular/core';
import {OrderDTO} from "../model/orderDTO.model";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../service/order.service";

/**
 * @author Mack_TB
 * @since 04/10/2024
 * @version 1.0.0
 */

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit {
  orderSummary?: OrderDTO;
  obj: any;
  total?: any;
  showDialog: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    const data = this.activatedRoute.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.obj.userId = 1;
    this.orderSummary = this.obj;

    this.total = this.orderSummary!.foodItems!.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.quantity * currentValue!.price!);
    }, 0);

  }

  saveOrder() {
    this.orderService.createOrder(this.orderSummary).subscribe({
      next: response => {
        this.showDialog = true;
      },
      error: err => {
        console.error('Failed to save data:', err);
      }
    });
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']); // Replace '/home' with the actual route for your home page
  }
}

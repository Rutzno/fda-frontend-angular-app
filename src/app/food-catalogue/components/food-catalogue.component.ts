import {Component, OnInit} from '@angular/core';
import {FoodCataloguePage} from "../../shared/model/foodcataloguepage.model";
import {FoodItem} from "../../shared/model/fooditem.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodItemService} from "../service/fooditem.service";
import {Restaurant} from "../../shared/model/restaurant.model";

/**
 * @author Mack_TB
 * @since 04/10/2024
 * @version 1.0.0
 */

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catalogue.component.html',
  styleUrl: './food-catalogue.component.css'
})
export class FoodCatalogueComponent implements OnInit {
  restaurantId!: number;
  foodItemsResponse!: FoodCataloguePage;
  foodItemCart: FoodItem[] = [];
  orderSummary!: FoodCataloguePage;

  constructor(private activatedRoute: ActivatedRoute,
              private foodItemService: FoodItemService,
              private router: Router) { }

  ngOnInit() {
    this.restaurantId = this.activatedRoute.snapshot.params["id"];
    this.getFoodItemsByRestaurantID(this.restaurantId);
  }

  getFoodItemsByRestaurantID(id: number) {
    this.foodItemService.getFoodItemsAndRestaurantByID(id).subscribe({
      next: data => {
        this.foodItemsResponse = data;
      }
    })
  }

  handleIncrement(food: FoodItem) {
    food.quantity++;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodItemCart.push(food);
    } else {
      // If record exists, update it in the array
      this.foodItemCart[index] = food;
    }
  }

  handleDecrement(food: FoodItem) {
    if (food.quantity > 0) {
      food.quantity--;

      const index = this.foodItemCart.findIndex(item => item.id === food.id);
      if (this.foodItemCart[index].quantity == 0) {
        this.foodItemCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodItemCart[index] = food;
      }
    }
  }

  onCheckOut() {
    this.orderSummary = new class implements FoodCataloguePage {
      foodItems!: FoodItem[];
      restaurant!: Restaurant;
    }
    this.orderSummary.foodItems = this.foodItemCart
    this.orderSummary.restaurant = this.foodItemsResponse.restaurant;
    this.router.navigate(['/orderSummary'], { queryParams: { data: JSON.stringify(this.orderSummary) } });
  }
}

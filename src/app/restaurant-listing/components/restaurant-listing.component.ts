/**
 * @author Mack_TB
 * @since 03/10/2024
 * @version 1.0.0
 */

import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../shared/model/restaurant.model";
import {Router} from "@angular/router";
import {RestaurantService} from "../service/restaurant.service";

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css'
})
export class RestaurantListingComponent implements OnInit{
  public restaurantList!: Restaurant[];

  constructor(private router: Router,
              private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getAllRestaurants()
  }

  getAllRestaurants() {
    this.restaurantService.getRestaurants().subscribe({
      next: response => this.restaurantList = response
    })
  }

  getRandomImage(): string {
    const imageCount = 8;
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`
  }

  private getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  handleOrderNow(restaurant : Restaurant) {
     this.router.navigateByUrl("foodCatalogue/" + restaurant.id);
  }
}

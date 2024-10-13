import {FoodItem} from "./fooditem.model";
import {Restaurant} from "./restaurant.model";


export interface FoodCataloguePage {
  foodItems: FoodItem[];
  restaurant: Restaurant;
}

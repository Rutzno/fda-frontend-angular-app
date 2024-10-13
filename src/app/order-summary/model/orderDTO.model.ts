import {FoodItem} from "../../shared/model/fooditem.model";
import {Restaurant} from "../../shared/model/restaurant.model";

/**
 * @author Mack_TB
 * @since 04/10/2024
 * @version 1.0.0
 */

export interface OrderDTO {
  foodItems?: FoodItem[];
  userId?: number;
  restaurant?: Restaurant;
}

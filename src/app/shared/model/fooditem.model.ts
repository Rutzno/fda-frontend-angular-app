/**
 * @author Mack_TB
 * @since 04/10/2024
 * @version 1.0.0
 */

export interface FoodItem {
  id?: number;
  itemName?: string;
  itemDescription?: string;
  isVeg?: boolean;
  price?: number;
  restaurantId?: number;
  quantity: number;
}

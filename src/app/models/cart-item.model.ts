import { Items } from "./items.model";

export class CartItem {

 
        constructor(public Items: Items,
                    public quantity: number = 1) {}

                    value(): number {
                        return this.Items.price * this.quantity;
                    }
}

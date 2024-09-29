import { Storable } from '../interfaces/Storable';
import { Product } from './Product';

export class Cart {
    constructor(private storage: Storable) {}

    addProduct(product: Product): void {
        this.storage.addItem(product);
    }

    removeProduct(product: Product): void {
        this.storage.removeItem(product);
    }

    listProducts(): Product[] {
        return this.storage.getItems();
    }

    getTotalPrice(): number {
        return this.storage.getTotal();
    }
}

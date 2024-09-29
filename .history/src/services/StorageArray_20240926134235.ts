import { Product } from './Product';
import { Storable } from '../interfaces/Storable';

export class StorageArray implements Storable {
    private items: Product[] = [];

    addItem(item: Product): void {
        this.items.push(item);
    }

    removeItem(item: Product): void {
        this.items = this.items.filter(i => i !== item);
    }

    getItems(): Product[] {
        return this.items;
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

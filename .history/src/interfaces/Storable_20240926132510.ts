export interface Storable {
    addItem(item: Product): void;
    removeItem(item: Product): void;
    getItems(): Product[];
    getTotal(): number;
}

import { InMemoryStorage } from './services/InMemoryStorage';
import { Cart } from './services/Cart';
import { Product } from './services/Product';

const storage = new InMemoryStorage();
const cart = new Cart(storage);

const product1 = new Product("Laptop", 1500);
const product2 = new Product("Smartphone", 800);

cart.addProduct(product1);
cart.addProduct(product2);

console.log("Produits dans le panier:", cart.listProducts());
console.log("Total:", cart.getTotalPrice());

cart.removeProduct(product1);

console.log("Produits dans le panier après suppression:", cart.listProducts());
console.log("Total après suppression:", cart.getTotalPrice());

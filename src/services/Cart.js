"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart(storage) {
        this.storage = storage;
    }
    Cart.prototype.addProduct = function (product) {
        this.storage.addItem(product);
    };
    Cart.prototype.removeProduct = function (product) {
        this.storage.removeItem(product);
    };
    Cart.prototype.listProducts = function () {
        return this.storage.getItems();
    };
    Cart.prototype.getTotalPrice = function () {
        return this.storage.getTotal();
    };
    return Cart;
}());
exports.Cart = Cart;

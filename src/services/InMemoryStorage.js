"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryStorage = void 0;
var InMemoryStorage = /** @class */ (function () {
    function InMemoryStorage() {
        this.items = [];
    }
    InMemoryStorage.prototype.addItem = function (item) {
        this.items.push(item);
    };
    InMemoryStorage.prototype.removeItem = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    InMemoryStorage.prototype.getItems = function () {
        return this.items;
    };
    InMemoryStorage.prototype.getTotal = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    return InMemoryStorage;
}());
exports.InMemoryStorage = InMemoryStorage;

"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var myArray = /** @class */ (function () {
    function myArray(firstElement) {
        this.array = [];
        this.array = [firstElement];
    }
    myArray.prototype.addElement = function (element) {
        this.array = __spreadArray(__spreadArray([], this.array), [element]);
        return element;
    };
    myArray.prototype.getElement = function (position) {
        return this.array[position];
    };
    return myArray;
}());
var array = new myArray("Primer elemento");
array.addElement(2);
array.addElement(3);
array.addElement(4);
array.addElement("Quinto elemento");

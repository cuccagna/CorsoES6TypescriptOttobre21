var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.jump = function (distanza) {
        console.log("L'animale salta " + distanza + " metri");
    };
    return Animal;
}());
//Estendiamo la classe Animal - ereditarietà
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "Dog";
        _this.name = "Pippo";
        return _this;
    }
    Dog.prototype.abbaia = function () {
        console.log("Bau bau");
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.abbaia();
dog.jump(2);
console.log("sono un " + dog.type + ", mi chiamo " + dog.name);

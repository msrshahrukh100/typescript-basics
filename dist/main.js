var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sweet = (function () {
    function Sweet(name) {
        console.log("Shahrukh" + name);
    }
    Sweet.prototype.color = function () {
        console.log("afff");
    };
    return Sweet;
}());
var msr = new Sweet("is cool");
msr.color();
var Sour = (function (_super) {
    __extends(Sour, _super);
    function Sour(name) {
        return _super.call(this, name) || this;
    }
    return Sour;
}(Sweet));

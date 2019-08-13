var Country;
(function (Country) {
    Country[Country["italy"] = 0] = "italy";
    Country[Country["spain"] = 1] = "spain";
    Country[Country["denmark"] = 2] = "denmark";
    Country[Country["ukraine"] = 3] = "ukraine";
    Country[Country["usa"] = 4] = "usa";
})(Country || (Country = {}));
var Euro = /** @class */ (function () {
    function Euro() {
    }
    Euro.prototype.getFlag = function () {
        return "🇪🇺";
    };
    Euro.prototype.getSymbol = function () {
        return "€";
    };
    return Euro;
}());
var Krona = /** @class */ (function () {
    function Krona() {
    }
    Krona.prototype.getFlag = function () {
        return "🇩🇰";
    };
    Krona.prototype.getSymbol = function () {
        return "DKK";
    };
    return Krona;
}());
var Hryvnia = /** @class */ (function () {
    function Hryvnia() {
    }
    Hryvnia.prototype.getFlag = function () {
        return "🇺🇦";
    };
    Hryvnia.prototype.getSymbol = function () {
        return "₴";
    };
    return Hryvnia;
}());
var Dolar = /** @class */ (function () {
    function Dolar() {
    }
    Dolar.prototype.getFlag = function () {
        return "🇺🇸";
    };
    Dolar.prototype.getSymbol = function () {
        return "$";
    };
    return Dolar;
}());
var CurrencyFactory = /** @class */ (function () {
    function CurrencyFactory() {
    }
    CurrencyFactory.make = function (currencyForCountry) {
        switch (currencyForCountry) {
            case Country.spain, Country.italy:
                return new Euro();
            case Country.denmark:
                return new Krona();
            case Country.ukraine:
                return new Hryvnia();
            case Country.usa:
                return new Dolar();
        }
    };
    return CurrencyFactory;
}());
var currency1 = CurrencyFactory.make(Country.ukraine);
console.log(currency1.getFlag() + " " + currency1.getSymbol());
var currency2 = CurrencyFactory.make(Country.denmark);
console.log(currency2.getFlag() + " " + currency2.getSymbol());

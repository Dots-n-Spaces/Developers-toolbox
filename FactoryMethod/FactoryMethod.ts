enum Country {
    italy = 0,
    spain, denmark, ukraine, usa
}

interface Currency {
    getFlag(): String;
    getSymbol(): String;
}

class Euro implements Currency {
    public getFlag(): String {
        return "🇪🇺"
    }

    public getSymbol(): String {
        return "€"
    }
}

class Krona implements Currency {
    getFlag(): String {
        return "🇩🇰"
    }

    public getSymbol(): String {
        return "DKK"
    }
}

class Hryvnia implements Currency {
    getFlag(): String {
        return "🇺🇦"
    }

    public getSymbol(): String {
        return "₴"
    }
}

class Dolar implements Currency {
    getFlag(): String {
        return "🇺🇸"
    }

    public getSymbol(): String {
        return "$"
    }
}

class CurrencyFactory {
    public static make(currencyForCountry: Country): Currency {
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
    }
}

let currency1 = CurrencyFactory.make(Country.ukraine);
console.log(`${currency1.getFlag()} ${currency1.getSymbol()}`);

let currency2 = CurrencyFactory.make(Country.denmark);
console.log(`${currency2.getFlag()} ${currency2.getSymbol()}`);

enum Country {
    case italy, spain, denmark, ukraine, usa
}

protocol Currency {
    func getFlag() -> String
    func getSymbol() -> String
}

class Euro: Currency {
    func getFlag() -> String {
        return "🇪🇺"
    }

    func getSymbol() -> String {
        return "€"
    }
}

class Krona: Currency {
    func getFlag() -> String {
        return "🇩🇰"
    }

    func getSymbol() -> String {
        return "DKK"
    }
}

class Hryvnia: Currency {
    func getFlag() -> String {
        return "🇺🇦"
    }

    func getSymbol() -> String {
        return "₴"
    }
}

class Dollar: Currency {
    func getFlag() -> String {
        return "🇺🇸"
    }

    func getSymbol() -> String {
        return "$"
    }
}

class CurrencyFactory {
    static func make(currencyFor country: Country) -> Currency {
        switch country {
        case .spain, .italy:
            return Euro()
        case .denmark:
            return Krona()
        case .ukraine:
            return Hryvnia()
        case .usa:
            return Dollar()
        }
    }
}

let currency1 = CurrencyFactory.make(currencyFor: .ukraine)
print("\(currency1.getFlag()) \(currency1.getSymbol())")

let currency2 = CurrencyFactory.make(currencyFor: .spain)
print("\(currency2.getFlag()) \(currency2.getSymbol())")

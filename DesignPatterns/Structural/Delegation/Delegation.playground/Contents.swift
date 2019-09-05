struct Cookie {
    var size = 5
    var hasChocolateChips = false
}

// Setup delegate protocol
protocol BakeryDelegate {
    func bakeCookies(cookie: Cookie)
}

// Implementation of the delegation
class Bakery: BakeryDelegate {
    func bakeCookies(cookie: Cookie) {
        print("Yay! A new cookie was baked, with size \(cookie.size).")
    }
}

class CookieShop {
    var delegate: BakeryDelegate
    
    init(delegate: BakeryDelegate) {
        self.delegate = delegate
    }
    
    func buy(cookies: Int) {
        var cookie = Cookie()
        cookie.size = cookies
        cookie.hasChocolateChips = true
        
        delegate.bakeCookies(cookie: cookie)
    }
}

let bakery = Bakery()
let shop = CookieShop(delegate: bakery)

shop.buy(cookies: 6)

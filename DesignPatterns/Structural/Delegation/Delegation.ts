class Cookie {
    public size = 5;
    public hasChocolateChips = false;
}

// Setup delegate interface
interface BakeryDelegate {
    bakeCookies(cookie: Cookie): void;
}

// Implementation of the delegation
class Bakery implements BakeryDelegate {
    bakeCookies(cookie: Cookie): void {
        console.log(`Yay! A new cookie was baked, with size ${cookie.size}.`);
    }
}

class CookieShop {
    constructor(private delegate: BakeryDelegate) {
    }

    buy(cookies: number): void {
        const cookie = new Cookie();
        cookie.size = cookies;
        cookie.hasChocolateChips = true;

        this.delegate.bakeCookies(cookie);
    }
}

const bakery = new Bakery();
const shop = new CookieShop(bakery);

shop.buy(6);
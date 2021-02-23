class Context {
    private state: State = new UnauthorizedState();

    private _isAuthorized: boolean;

    get isAuthorized(): boolean {
        return this.state.isAuthorized(this);
    }

    private _userId: string;

    get userId(): string {
        return this.state.getUserId(this);
    }

    public changeStateToAuthorized(userId: string) {
        this.state = new AuthorizedState(userId);
    }

    public changeStateToUnauthorized() {
        this.state = new UnauthorizedState();
    }

    public printAuthorizationStatus() {
        console.log(`Is user authorized: ${this.isAuthorized}. User id is: ${this.userId}.`);
    }
}

interface State {
    isAuthorized(context: Context): boolean;
    getUserId(context: Context): string;
}

class UnauthorizedState implements State {
    public isAuthorized(context: Context): boolean {
        return false;
    }

    public getUserId(context: Context): string {
        return `nil`;
    }
}

class AuthorizedState implements State {
    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    public isAuthorized(context: Context): boolean {
        return true;
    }

    public getUserId(context: Context): string {
        return this.userId;
    }
}

let userContext = new Context();
// initial state
userContext.printAuthorizationStatus();

// authorizing as admin
userContext.changeStateToAuthorized("admin");

// now logged in as "admin"
userContext.printAuthorizationStatus();

// unauthorizing
userContext.changeStateToUnauthorized();

// now logged out
userContext.printAuthorizationStatus();

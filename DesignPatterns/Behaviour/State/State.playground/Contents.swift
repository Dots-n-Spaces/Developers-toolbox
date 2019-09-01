final class Context {
    private var state: State = UnauthorizedState()
    
    var isAuthorized: Bool {
        get {
            return state.isAuthorized(context: self)
        }
    }
    
    var userId: String? {
        get {
            return state.userId(context: self)
        }
    }
    
    func changeStateToAuthorized(userId: String) {
        state = AuthorizedState(userId: userId)
    }
    
    func changeStateToUnauthorized() {
        state = UnauthorizedState()
    }
    
    func printAuthorizationStatus() {
        print("Is user authorized: \(userContext.isAuthorized). User id is: \(String(describing: userContext.userId)).")
    }
}

protocol State {
    func isAuthorized(context: Context) -> Bool
    func userId(context: Context) -> String?
}

class UnauthorizedState: State {
    func isAuthorized(context: Context) -> Bool {
        return false
    }
    
    func userId(context: Context) -> String? {
        return nil
    }
}

class AuthorizedState: State {
    let userId: String
    
    init(userId: String) {
        self.userId = userId
    }
    
    func isAuthorized(context: Context) -> Bool {
        return true
    }
    
    func userId(context: Context) -> String? {
        return userId
    }
}

let userContext = Context()
// initial state
userContext.printAuthorizationStatus()

// authorizing as admin
userContext.changeStateToAuthorized(userId: "admin")

// now logged in as "admin"
userContext.printAuthorizationStatus()

// unauthorizing
userContext.changeStateToUnauthorized()

// now logged out
userContext.printAuthorizationStatus()

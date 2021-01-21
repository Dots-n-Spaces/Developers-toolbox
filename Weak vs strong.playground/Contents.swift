import UIKit
import Foundation

class A {
    //    To resolve
    //weak var reference: B?
    var reference: B?
    
    init(a: B?) {
        self.reference = a
    }
    
    deinit {
        print("A died")
    }
}

class B {
    var reference: A?
    
    init(b: A?) {
        self.reference = b
    }
    
    deinit {
        print("B died")
    }
}

var a: A? = A(a: nil)
var b: B? = B(b: a)
a!.reference = b
b = nil
a = nil

final class SystemA {
    public func veryBigMethod() {
        print("veryBigMethod of SystemA");
    }
}

final class SystemB {
    public func veryImportantMethod() {
        print("veryImportantMethod of SystemB");
    }
}

final class SystemC {
    public func veryDifficultMethod() {
        print("veryDifficultMethod of SystemC");
    }
}

class Facade {
    private let a = SystemA()
    private let b = SystemB()
    private let c = SystemC()

    public func runBigAndImportantStuff() {
        print("-- runBigAndImportantStuff started --")
        self.a.veryBigMethod()
        self.b.veryImportantMethod()
        print("-- runBigAndImportantStuff is done --")
    }

    public func  runBigAndDifficultStuff() {
        print("-- runBigAndDifficultStuff started --")
        self.a.veryBigMethod()
        self.c.veryDifficultMethod()
        print("-- runBigAndDifficultStuff is done --")
    }
}

let facade = Facade()
facade.runBigAndImportantStuff()
facade.runBigAndDifficultStuff()


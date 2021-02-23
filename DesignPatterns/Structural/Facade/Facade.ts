namespace FacadePattern {
    export class SystemA {
        public veryBigMethod(): void {
            console.log("veryBigMethod of SystemA");
        }
    }

    export class SystemB {
        public veryImportantMethod(): void {
            console.log("veryImportantMethod of SystemB");
        }
    }

    export class SystemC {
        public veryDifficultMethod(): void {
            console.log("veryDifficultMethod of SystemC");
        }
    }

    export class Facade {
        private a = new SystemA();
        private b = new SystemB();
        private c = new SystemC();

        public runBigAndImportantStuff(): void {
            console.log(`-- runBigAndImportantStuff started --`);
            this.a.veryBigMethod();
            this.b.veryImportantMethod();
            console.log(`-- runBigAndImportantStuff is done --`);
        }

        public runBigAndDifficultStuff(): void {
            console.log(`-- runBigAndDifficultStuff started --`);
            this.a.veryBigMethod();
            this.c.veryDifficultMethod();
            console.log(`-- runBigAndDifficultStuff is done --`);
        }
    }
}

const facade = new FacadePattern.Facade();
facade.runBigAndImportantStuff();
facade.runBigAndDifficultStuff();

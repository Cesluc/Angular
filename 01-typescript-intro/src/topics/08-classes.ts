

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'No Address'
    ) { }

}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super(realName,'NewYork')
    }
}


const ironman = new Hero('Ironman',45,'Tony Stark');
console.log(ironman);
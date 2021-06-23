
export class Move {

    constructor(
        public toId: string = '',
        public to: string = '',
        public at: number = Date.now(),
        public amount: number = 0
    ) { }
}


// toId: "d99e3u2ih329"
// to: "Moshiko",
// at: 2652712571,
// amount: 2

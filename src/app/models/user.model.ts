import { Move } from "./move.model";

export class User {

    constructor(
        public name: string = '',
        public password: string = '',
        public coins: number = 0,
        public moves: Array<Move> = []
    ) { }


}

// }
// name: "Ochoa Hyde",
// coins: 100,
// moves: []
// }
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Contact } from "../models/contact.model";
import { Move } from "../models/move.model";
import { User } from "../models/user.model";

const users = [
    {
        name: "Ochoa Hyde",
        password: "123456",
        coins: 100,
        moves: <any>[]
    }
]

@Injectable({
    providedIn: 'root'
})

export class UserService {
    // public users$ = this._users$.asObservable()


    constructor() {
    }

    public getUser() {
        return JSON.parse(localStorage.getItem('loggedInUser'))
    }

    public signup(user: User) {
        const newUser: User = new User(user.name, user.password, user.coins, user.moves);
        users.push(newUser);
        localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    }

    public isLoggedInUser() {
        return localStorage.getItem('loggedInUser') ? true : false
    }

    public transferFunds(amount: number) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'))
        if (user.coins - amount < 0) return
        user.coins -= amount
        localStorage.setItem('loggedInUser', JSON.stringify(user));
    }

    private _addMove$ = new BehaviorSubject<void>(null);

    public addMove$ = this._addMove$.asObservable()

    public addMove(contact: Contact, amount: number) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'))
        const move = new Move(contact._id, contact.name, undefined, amount)
        user.moves.unshift(move)
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this._addMove$.next()
    }

    public getMoves() {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        return user.moves;
    }

    public getContactMoves(contactId: string) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        let moves = user.moves.filter((move: Move) => move.toId === contactId)
        return moves;
    }

}
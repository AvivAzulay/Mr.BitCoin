import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})

export class MoveListComponent implements OnInit {

  @Input() contact?: Contact
  constructor(private userService: UserService) { }
  subscription: Subscription
  moves: Array<Move>


  ngOnInit(): void {
    this.subscription = this.userService.addMove$.subscribe(() => {
      if (this.contact) this.moves = this.userService.getContactMoves(this.contact._id)
      else this.moves = this.userService.getMoves()
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}

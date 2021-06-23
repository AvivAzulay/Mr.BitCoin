import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {
  @Input() contact: Contact
  amount: number

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSumbit() {
    this.userService.transferFunds(this.amount)
    this.userService.addMove(this.contact, this.amount)
    this.amount = null
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  @Input() user: User
  rate$: Observable<Object>
  sum: any
  btcUsd: number

  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<void> {
    this.rate$ = this.bitcoinService.getRate()
    this.convertToUsd()
  }

  async convertToUsd() {
    const rate = await this.rate$.toPromise()
    const sum = this.user.coins / +rate
    this.sum = sum
    this.btcUsd = +((this.sum / this.user.coins).toFixed())
  }
}

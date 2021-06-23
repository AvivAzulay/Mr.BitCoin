import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class BitcoinService {

    constructor(private http: HttpClient) { }

    getRate() {
        return this.http.get<string>('https://blockchain.info/tobtc?currency=USD&value=1')
            .pipe(
                map((res) => res))
    }

    getMarketPrice() {
        return this.http
            .get<Array<Object>>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            .pipe(
                map(res => res)
            )
    }

    getConfirmedTransactions() {
        return this.http
            .get<Array<Object>>('https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true')
            .pipe(
                map(res => res)
            )
    }


}






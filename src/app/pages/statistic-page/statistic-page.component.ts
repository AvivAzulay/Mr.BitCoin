import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})

export class StatisticPageComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) { }
  mktPriceData: any
  mktPriceTitle: string
  confirmedTransData: any
  confirmedTransTitle: string

  chartMktPrice = {
    title: 'Test Chart',
    type: ChartType.AreaChart,
    data: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    columnNames: ['Element', 'Density'],
    options: {
      colors: ['#81fbf7'],
      backgroundColor:'transparent',
      color:'white',
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true,
      },
      hAxis:{
        textStyle:{color:'white'}
        
      },
      vAxis:{
        textStyle:{color:'white'}
        
      },
      titleTextStyle: {
        color:'white'
      }
    }
  };

  chartConfirmedTrans = {
    title: 'Test Chart',
    type: ChartType.LineChart,
    data: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    columnNames: ['Element', 'Density'],
    options: {
      colors: ['#81fbf7'],
      backgroundColor:'transparent',
      color:'white',
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true,
      },
      hAxis:{
        textStyle:{color:'white'}
        
      },
      vAxis:{
        textStyle:{color:'white'}
        
      },
      titleTextStyle: {
        color:'white'
      }
    }
  };


  async ngOnInit(): Promise<void> {
    const mktPrice: any = await this.bitcoinService.getMarketPrice().toPromise()
    this.mktPriceTitle = mktPrice.description
    this.mktPriceData = mktPrice.values.map((value: any) => {
      const values: any = Object.values(value)
      const time: Date = new Date(values[0] * 1000)
      values[0] = time
      return values
    })
    this.chartMktPrice.data = this.mktPriceData
    this.chartMktPrice.title = this.mktPriceTitle
    const confirmedTrans: any = await this.bitcoinService.getConfirmedTransactions().toPromise()
    this.confirmedTransTitle = confirmedTrans.description
    this.confirmedTransData = confirmedTrans.values.map((value: any) => {
      const values: any = Object.values(value)
      const time: Date = new Date(values[0] * 1000)
      values[0] = time
      return values
    })
    this.chartConfirmedTrans.data = this.confirmedTransData
    this.chartConfirmedTrans.title = this.confirmedTransTitle
  }
}




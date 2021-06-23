import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HeaderComponent } from './cmps/header/header.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TransferFundsComponent } from './cmps/transfer-funds/transfer-funds.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactEditPageComponent,
    ContactDetailsPageComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    StatisticPageComponent,
    ChartComponent,
    BitcoinAppComponent,
    HeaderComponent,
    SignUpComponent,
    TransferFundsComponent,
    MoveListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

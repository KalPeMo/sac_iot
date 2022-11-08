import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

import { MqttModule } from 'ngx-mqtt';
import { MQTT_SERVICE_OPTIONS } from '../environments/environment';

import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { VoteCounterComponent } from './components/vote-counter/vote-counter.component';
import { HideDocumentPipe } from './pipes/hide-document.pipe';
import { VotesChartComponent } from './components/votes-chart/votes-chart.component';
import { TimerService } from './services/timer.service';
import { VotingServiceService } from './services/voting-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    VoteCounterComponent,
    HideDocumentPipe,
    VotesChartComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    ChartModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    HttpClientModule
  ],
  providers: [TimerService,VotingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

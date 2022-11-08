import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {IMqttMessage, MqttService} from 'ngx-mqtt';

import { TimerService } from 'src/app/services/timer.service';
import { VotingServiceService } from 'src/app/services/voting-service.service';

@Component({
  selector: 'app-vote-counter',
  templateUrl: './vote-counter.component.html',
  styleUrls: ['./vote-counter.component.css']
})
export class VoteCounterComponent implements OnInit {
  time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  @Input() finishDateString: string = '';
  finishDate: Date = new Date();

  timerSub: Subscription | undefined

  votingSub: Subscription | undefined;

  totalVotes=0;

  constructor(private timerService: TimerService, private votingService:VotingServiceService, private _mqttService: MqttService) { }

  ngOnInit(): void {
    this.finishDate = new Date(this.finishDateString);
    this.time = {
      days: 0, hours: 0, minutes: 0, seconds: 0
    };

    this.timerSub = this.start();

    this.votingService.getTotalVotes().subscribe((votes)=>{
      this.totalVotes = votes;
    })

    this.votingSub = this._mqttService.observe("front/vote").subscribe((message: IMqttMessage) => {
      console.log(message.payload.toString());
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.timerSub?.unsubscribe();
  }

  updateTime(t: Date) {
    const diff = this.finishDate.getTime() - t.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
    if (diff < 0) {
      this.time = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        days: 0
      }
      this.timerSub?.unsubscribe();
      return;
    }
  }

  start() {
    return this.timerService.clock?.subscribe((t) => this.updateTime(t));
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';
import { Candidate } from 'src/app/types/Candidate';
import { CandidateVotes } from 'src/app/types/CandidateVote';

@Component({
  selector: 'app-votes-chart',
  templateUrl: './votes-chart.component.html',
  styleUrls: ['./votes-chart.component.css']
})
export class VotesChartComponent implements OnInit {

  @Input() candidates: Candidate[] = [];
  @Input() totalVotes: CandidateVotes[] = [];
  @Input() endDateString: string = '';

  votingEnded = false;

  endDate: Date | undefined;
  chartData: any;
  basicOptions: any;

  timerSub: Subscription | undefined;

  constructor(private timerService:TimerService) { }

  ngOnInit(): void {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };
    this.setChartData();

    this.endDate = new Date(this.endDateString);
    this.timerSub = this.timerService.clock?.subscribe((t) => this.setVotingEnded(t));
  }

  setChartData() {
    const votes: number[] = [];
    this.candidates.forEach(candidate => {
      const vote = this.totalVotes.find(vote => vote.candidate === candidate.id);
      votes.push(vote?.votesCount || 0);
    });
    this.chartData = {
      labels: this.candidates.map((candidate: Candidate) => `${candidate.firstName} ${candidate.lastName}`),
      datasets: [
        {
          label: 'Total de votos',
          backgroundColor: '#42A5F5',
          data: votes
        }
      ]
    };
  }

  setVotingEnded(date:Date) {
    this.votingEnded =this.endDate? this.endDate <= date: false;
  }

}

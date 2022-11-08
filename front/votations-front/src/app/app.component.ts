import { Component } from '@angular/core';
import { VotingServiceService } from './services/voting-service.service';
import { Campaign, Candidate } from './types/Candidate';
import { CandidateVotes } from './types/CandidateVote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'votations-front';
  candidates: Candidate[] = [
  ]

  totalVotes: CandidateVotes[] = [
  ]

  campaign: Campaign | undefined;

  constructor(private votingService: VotingServiceService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.votingService.getCandidates().subscribe((candidates: Candidate[]) => {
      this.candidates = candidates;
      this.campaign = candidates[0].campaign;
    })
    this.votingService.getCandidatesVotes().subscribe((votes: CandidateVotes[]) => {
      this.totalVotes = votes;
    })
  }
}

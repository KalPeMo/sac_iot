import { Injectable } from '@angular/core';
import { backUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Candidate } from '../types/Candidate';
import { Observable } from 'rxjs';
import { CandidateVotes } from '../types/CandidateVote';

@Injectable({
  providedIn: 'root'
})
export class VotingServiceService {

  baseurl = backUrl;
  httpHeaders = new HttpHeaders({ "Content-type": "application/json" });

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.baseurl}api/candidate/getAllCantidate`, { headers: this.httpHeaders });
  }

  getCandidatesVotes(): Observable<CandidateVotes[]> {
    return this.http.get<CandidateVotes[]>(`${this.baseurl}api/vote/getVotesByCandidate`, { headers: this.httpHeaders });
  }

   getTotalVotes(): Observable<number> {
    return this.http.get<number>(`${this.baseurl}api/vote/getVotesCount`, { headers: this.httpHeaders });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/types/Candidate';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  @Input() candidate: Candidate | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}


export interface Candidate {
    id:           number;
    firstName:    string;
    lastName:     string;
    document:     string;
    documentType: string;
    campaign:     Campaign;
}

export interface Campaign {
    id:         number;
    name:       string;
    startDate:  string;
    endDate:    string;
    candidates: any[];
}



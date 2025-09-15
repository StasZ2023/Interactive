
export interface Event {
    year: number;
    text:string;
    
  }
  
  export interface TimePeriod {
    id: number;
    title: string;
    startYear: number;
    endYear: number;
    events: Event[];
  }
 
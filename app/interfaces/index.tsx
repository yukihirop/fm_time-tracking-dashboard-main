export interface Item {
  title: string;
  timeframes: Timeframes;
}

export interface Timeframes {
  daily: Daily;
  weekly: Weekly;
  monthly: Monthly;
  [key: string]: any;
}

export interface Daily {
  current: number;
  previous: number;
}

export interface Weekly {
  current: number;
  previous: number;
}

export interface Monthly {
  current: number;
  previous: number;
}

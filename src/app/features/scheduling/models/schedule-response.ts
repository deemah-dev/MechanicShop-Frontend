import { SpotResponse } from './spot-response';

export interface ScheduleResponse {
  onDate: string;
  dayEnded: boolean;
  spots: Array<SpotResponse>;
}

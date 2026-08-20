import { AvailabilitySlotResponse } from './availability-slot-response';

export interface SpotResponse {
  spot: string;
  slots: Array<AvailabilitySlotResponse>;
}

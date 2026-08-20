import { PartResponse } from './part-response';

export interface RepairTaskResponse {
  repairTaskId: string;
  name: string;
  description: string;
  duration: number;
  cost: number;
  parts: Array<PartResponse>;
}

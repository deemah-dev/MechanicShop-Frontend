import { UpdatePartRequest } from './update-part-request';

export interface UpdateRepairTaskRequest {
  repairTaskId: string;
  name: string;
  description: string;
  duration: number;
  cost: number;
  parts: Array<UpdatePartRequest>;
}

import { CreatePartRequest } from './create-part-request';

export interface CreateRepairTaskRequest {
  name: string;
  description: string;
  laborCost: number;
  estimatedDurationInMinutes: number;
  part: Array<CreatePartRequest>;
}

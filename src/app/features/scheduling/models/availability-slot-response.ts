import { EmployeeResponse } from '../../employees/models/employee-response';
import { RepairTaskResponse } from '../../repair-tasks/models';

export interface AvailabilitySlotResponse {
  spot: string;
  isOccupied: boolean;
  isAvailable: boolean;
  workOrderId: null | string;
  status: null | string;
  technican: null | EmployeeResponse;
  vehicle: null | string;
  startAt: null | string;
  endAt: null | string;
  repairTasks: Array<RepairTaskResponse>;
}

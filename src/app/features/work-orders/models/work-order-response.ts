import { InvoiceResponse } from '../../billing/models';
import { VehicleResponse } from '../../customers/models';
import { EmployeeResponse } from '../../employees/models/employee-response';
import { RepairTaskResponse } from '../../repair-tasks/models';

export interface WorkOrderResponse {
  workOrderId: string;
  vehicle: null | VehicleResponse;
  technician: null | EmployeeResponse;
  servicePay: string;
  startAt: string;
  status: string;
  repairTasks: Array<RepairTaskResponse>;
  endedAt: null | string;
  invoice: null | InvoiceResponse;
  totalLaborCost: number;
  totalPartCost: number;
}

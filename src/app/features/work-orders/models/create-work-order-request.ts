export interface CreateWorkOrderRequest {
  servicePay: string;
  vehicleId: string;
  startAt: string;
  technicanId: string;
  repairTasksIds: Array<string>;
}

export interface WorkOrderListItemResponse {
  workOrderId: string;
  invoiceId: null | string;
  servicePay: string;
  customer: null | string;
  vehicle: null | string;
  technican: null | string;
  status: string;
  repairTasks: Array<string>;
  startAt: string;
  endAt: string;
}

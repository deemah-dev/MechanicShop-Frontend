import { VehicleResponse } from '../../customers/models';
import { EmployeeResponse } from '../../employees/models';
import { LineItem } from './line-item';

export interface InvoiceResponse {
  invoiceId: string;
  workOrderId: string;
  issuedAt: string;
  customer: null | EmployeeResponse;
  vehicle: null | VehicleResponse;
  discountAmount: number;
  subTotal: number;
  taxAmount: number;
  total: number;
  paymentStatus: null | string;
  items: Array<LineItem>;
}

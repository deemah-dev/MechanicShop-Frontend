import { VehicleResponse } from './vehicle-response';

export interface CustomerResponse {
  customerId: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  vehicles: Array<VehicleResponse>;
}

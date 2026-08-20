import { CreateVehicleRequest } from './create-vehicle-request';

export interface CreateCustomerRequest {
  name: string;
  phone: string;
  email: string;
  address: string;
  vehicles: Array<CreateVehicleRequest>;
}

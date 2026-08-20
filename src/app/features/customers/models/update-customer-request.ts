export interface UpdateCustomerRequest {
  customerId: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  vehicles: Array<object>;
}

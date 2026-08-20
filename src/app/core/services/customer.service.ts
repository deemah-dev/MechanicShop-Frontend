import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import {
  CreateCustomerRequest,
  CustomerResponse,
  UpdateCustomerRequest,
} from '../../features/customers/models';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  private baseUrl = `${this.apiUrl}/customers`;

  Create(createData: CreateCustomerRequest): Observable<CustomerResponse> {
    return this.http.post<CustomerResponse>(this.baseUrl, createData);
  }

  Update(id: any, updateData: UpdateCustomerRequest): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updateData);
  }

  GetAll(): Observable<CustomerResponse[]> {
    return this.http.get<CustomerResponse[]>(`${this.baseUrl}/all`);
  }

  Get(id: any): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(`${this.baseUrl}/${id}`);
  }

  Delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { CreateInvoiceRequest, InvoiceResponse } from '../../features/billing/models';

@Injectable({
  providedIn: 'root',
})
export class BillingService extends BaseService {
  private baseUrl = `${this.apiUrl}/invoices`;

  Get(id: any): Observable<InvoiceResponse> {
    return this.http.get<InvoiceResponse>(`${this.baseUrl}/${id}`);
  }

  Create(createData: CreateInvoiceRequest): Observable<any> {
    return this.http.post<any>(this.baseUrl, createData);
  }

  Settle(id: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${id}/settle`, id);
  }
}

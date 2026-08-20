import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import {
  CreateWorkOrderRequest,
  UpdateRepairTasksRequest,
  UpdateSpotRequest,
  UpdateStatusRequest,
  UpdateTechnicanRequest,
  WorkOrderListItemResponse,
  WorkOrderResponse,
} from '../../features/work-orders/models';
import { PagenatedList } from '../models/pagenated-list';

@Injectable({
  providedIn: 'root',
})
export class WorkOrderService extends BaseService {
  private baseUrl = `${this.apiUrl}/work-orders`;

  Create(createData: CreateWorkOrderRequest): Observable<WorkOrderResponse> {
    return this.http.post<WorkOrderResponse>(this.baseUrl, createData);
  }

  UpdateStatus(id: any, updateData: UpdateStatusRequest): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}/status`, updateData);
  }

  UpdateTechnican(id: any, updateData: UpdateTechnicanRequest): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}/technican`, updateData);
  }

  UpdateServicePay(id: any, updateData: UpdateSpotRequest): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}/service-pay`, updateData);
  }

  UpdateRepairTasks(id: any, updateData: UpdateRepairTasksRequest): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}/repair-tasks`, updateData);
  }

  Get(id: any): Observable<WorkOrderResponse> {
    return this.http.get<WorkOrderResponse>(`${this.baseUrl}/${id}`);
  }

  Delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  GetAll(filter: any): Observable<PagenatedList<WorkOrderListItemResponse>> {
    return this.http.get<PagenatedList<WorkOrderListItemResponse>>(`${this.baseUrl}/all`);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { RepairTaskResponse } from '../../features/repair-tasks/models';

@Injectable({
  providedIn: 'root',
})
export class RepairTaskService extends BaseService {
  private baseUrl = `${this.apiUrl}/repair-tasks`;

  Create(createData: any): Observable<RepairTaskResponse> {
    return this.http.post<RepairTaskResponse>(this.baseUrl, createData);
  }

  Update(id: any, updateDate: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updateDate);
  }

  GetAll(): Observable<RepairTaskResponse[]> {
    return this.http.get<RepairTaskResponse[]>(`${this.baseUrl}/all`);
  }

  Get(id: any): Observable<RepairTaskResponse> {
    return this.http.get<RepairTaskResponse>(`${this.baseUrl}/${id}`);
  }

  Delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { EmployeeResponse } from '../../features/employees/models';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends BaseService {
  private baseUrl = `${this.apiUrl}/employees`;

  Get(id: any): Observable<EmployeeResponse> {
    return this.http.get<EmployeeResponse>(`${this.baseUrl}/${id}`);
  }

  GetAll(): Observable<EmployeeResponse[]> {
    return this.http.get<EmployeeResponse[]>(`${this.baseUrl}/all`);
  }
}

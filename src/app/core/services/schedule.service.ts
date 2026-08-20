import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { ScheduleResponse } from '../../features/scheduling/models';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService extends BaseService {
  private baseUrl = `${this.apiUrl}/schedules`;

  GetAll(): Observable<ScheduleResponse> {
    return this.http.get<ScheduleResponse>(`${this.baseUrl}/daily`);
  }
}

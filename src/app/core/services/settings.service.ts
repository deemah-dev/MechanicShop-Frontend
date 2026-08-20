import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService extends BaseService {
  private baseUrl = `${this.apiUrl}/settings`;

  GetOperatingHours(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/operating-hours`);
  }
}

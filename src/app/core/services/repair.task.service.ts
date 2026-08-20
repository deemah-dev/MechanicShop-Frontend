import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RepairTaskService{
  private http = inject(HttpClient);
  private baseUrl = 'https://localhost:5050/api/repair-tasks';

  Create(createData: any) : Observable<any>{
    return this.http.post(this.baseUrl, createData);
  }

  Update(id: any, updateDate: any) : Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, updateDate);
  }

  GetAll() : Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  Get(id: any) : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}

import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService{
  private http = inject(HttpClient);
  private baseUrl = 'https://localhost:5050/api/customers';

  Create(createData: any) : Observable<any>{
    return this.http.post<any>(this.baseUrl, createData);
  }

  Update(id: any, updateData: any) : Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/${id}`, updateData);
  }

  GetAll() : Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  Get(id: any) : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}

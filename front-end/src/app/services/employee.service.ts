import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7041/api/employee'; 
  
  constructor(private http: HttpClient) {}

  addEmployee(employee:Employee):Observable<void>{
    return this.http.post<void>(this.apiUrl,employee);
  }

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl);
  }
}

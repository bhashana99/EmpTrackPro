import { Injectable, signal } from '@angular/core';
import { Employee } from '../models/employee.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://localhost:7041/api/employee'; 

   employees = signal<Employee[]>([]);

  
  constructor(private http: HttpClient) {}

  addEmployee(employee:Employee):Observable<void>{
    return this.http.post<void>(this.apiUrl,employee);
  }

  loadEmployees() {
    this.http.get<Employee[]>(this.apiUrl).subscribe({
      next: (data) => this.employees.set(data),
      error: (err) => console.error('Error loading employees', err)
    });
  }

  deleteEmployee(employeeNo : number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${employeeNo}`);
  }

}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];
  

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
    console.log("ngoninit call..")
  }

  fetchEmployees() {
    this.employeeService.getAllEmployee().subscribe({
      next: (data) => {
          this.employees = data
          console.log("data== ",this.employees);
      },
        
      error: (err) => console.error('Error fetching employees:', err)
    });
  }
}

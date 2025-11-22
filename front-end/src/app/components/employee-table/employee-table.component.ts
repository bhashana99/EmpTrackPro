import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-table',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.loadEmployees();
  }

  get employees(){
    return this.employeeService.employees();
  }

  
}

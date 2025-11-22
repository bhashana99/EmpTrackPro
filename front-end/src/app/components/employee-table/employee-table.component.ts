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
  employees: Employee[] = [];
  

  constructor(private employeeService: EmployeeService,  private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchEmployees();
    console.log("ngoninit call..")
  }

  fetchEmployees() {
    this.employeeService.getAllEmployee().subscribe({
      next: (data) => {
          this.employees = data;
           this.cd.detectChanges();
          console.log("data== ",this.employees);
      },
        
      error: (err) => console.error('Error fetching employees:', err)
    });
  }
}

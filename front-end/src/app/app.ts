import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { Employee } from './models/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, EmployeeFormComponent, EmployeeTableComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('front-end');

  selectedEmployee!: Employee | null;
  editedEmployeeNo: number | null = null;

  onEditEmployee(emp: Employee) {
    this.selectedEmployee = emp;
    this.editedEmployeeNo = emp.employeeNo;
  }

  onCancelEdit() {
    this.editedEmployeeNo = null;
    this.selectedEmployee = null;
  }
}

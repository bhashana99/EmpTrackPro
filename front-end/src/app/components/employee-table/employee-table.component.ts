import { Employee } from './../../models/employee.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() edit = new EventEmitter<any>();

  editedEmployeeNo: number | null = null;
  
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.loadEmployees();
  }

  get employees(){
    return this.employeeService.employees();
  }

  onEdit(employee : Employee){
    this.editedEmployeeNo = employee.employeeNo;
    this.edit.emit(employee);
  }

  onDelete(employeNo : number){

  }

  
}

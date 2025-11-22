import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-form',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  maxDate!: string;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      employeeNo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      salary: ['', Validators.required],
    });

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    this.maxDate = yesterday.toISOString().split('T')[0];
  }

  onAddEmployee() {
    const formValue = this.employeeForm.value;

    const employeeDto: Employee = {
      employeeNo: formValue.employeeNo,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      dateOfBirth: new Date(formValue.dob).toISOString().split('T')[0],
      salary: formValue.salary,
    };
    console.log('add button click', employeeDto);

    this.employeeService.addEmployee(employeeDto).subscribe({
      next: (res) => {
        console.log('employee added successful: ', res);
        this.employeeForm.reset();
      },
      error(err) {
        console.log('error adding employee ', err);
      },
    });

    this.employeeService.getAllEmployee().subscribe({
      next: (res)=>{
        console.log("all data",res);
      }
    })
  }
}

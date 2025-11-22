import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {

  employeeForm !: FormGroup;
  maxDate !: string;

  
  constructor(private fb:FormBuilder, private employeeService: EmployeeService){}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      employeeNumber:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      dob:['',Validators.required],
      salary:['',Validators.required],
    });

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    this.maxDate = yesterday.toISOString().split('T')[0];
  }


  

  onAddEmployee(){
    const employeeDto : Employee = this.employeeForm.value;

    console.log("add button click",employeeDto);

  }

  
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',

  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {

  employeeForm !: FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeNumber:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      dob:['',Validators.required],
      salary:['',Validators.required],
    })
  }

  onAdd(){
    console.log("add button click");

  }

  
}

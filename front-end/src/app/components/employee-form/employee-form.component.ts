import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
  @Input() selectedEmployee!: Employee | null;
  @Output() cancelEdit = new EventEmitter<void>();

  employeeForm!: FormGroup;
  maxDate!: string;
  isEditMode = false;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      employeeNo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      salary: ['', Validators.required],
    });

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    this.maxDate = yesterday.toISOString().split('T')[0];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedEmployee'] && this.selectedEmployee) {
      const emp = { ...this.selectedEmployee };

      if (emp.dateOfBirth) {
        const date = new Date(emp.dateOfBirth);
        emp.dateOfBirth = date.toISOString().split('T')[0];
      }

      this.employeeForm.patchValue(emp);

      this.isEditMode = true;
      this.employeeForm.get('employeeNo')?.disable();
    }
  }

  get f() {
    return this.employeeForm.controls;
  }

  onAddEmployee() {
    this.employeeForm.get('employeeNo')?.enable();

    const employeeDto = this.employeeDtoMapper();
    console.log('add button click', employeeDto);

    this.employeeService.addEmployee(employeeDto).subscribe({
      next: (res) => {
        console.log('employee added successful: ', res);
        this.employeeService.loadEmployees();
        this.employeeForm.reset();
      },
      error(err) {
        console.log('error adding employee ', err);
      },
    });
  }

  onEditEmployee() {
    const employeeDto = this.employeeDtoMapper();
    const employeeNo = employeeDto.employeeNo;

    console.log('edit button click', employeeDto);

    this.employeeService.editEmployee(employeeDto, employeeNo).subscribe({
      next: (res) => {
        console.log('employee updated successful');
        this.employeeService.loadEmployees();
        this.employeeForm.reset();
        this.employeeForm.get('employeeNo')?.enable();
      },
      error: (err) => {
        console.log('error updating employee ', err);
      },
    });
  }

  onCancel() {
    this.isEditMode = false;
    this.employeeForm.reset();
    this.selectedEmployee = null;
    this.employeeForm.get('employeeNo')?.enable();

    this.cancelEdit.emit();
  }

  private employeeDtoMapper(): Employee {
    const formValue = this.employeeForm.getRawValue();

    return {
      employeeNo: formValue.employeeNo,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      dateOfBirth: new Date(formValue.dateOfBirth).toISOString().split('T')[0],
      salary: formValue.salary,
    };
  }
}

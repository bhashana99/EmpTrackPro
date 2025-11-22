import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeFormComponent } from "./components/employee-form/employee-form.component";
import { EmployeeTableComponent } from "./components/employee-table/employee-table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeFormComponent, EmployeeTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end');
}

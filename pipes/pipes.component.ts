import { Component, OnInit } from '@angular/core';

import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public employee:Employee = {} as Employee;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployee();
  }

}

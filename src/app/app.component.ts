
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {StaffemployeeService,Employee} from 'staffemployee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Library';

  constructor(private staffemployeeService:StaffemployeeService){}
  staffEmployee$ = this.staffemployeeService.getEmployee()
}
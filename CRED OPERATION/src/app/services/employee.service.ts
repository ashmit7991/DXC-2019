import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  editdata: any;
  emplist: Employee[] = [
    {
      id: 1,
      name: 'Engineering',
      salary: 'Reseach and Development',
      dob: new Date('1997-12-19').toLocaleDateString()
    },
    {
      id: 2,
      name: 'Tool Design',
      salary: 'Reseach and Development',
      dob: new Date('1996-12-19').toLocaleDateString()
    },
    {
      id: 3,
      name: 'Sales',
      salary: 'Sales and Marketing',
      dob: new Date('1996-12-19').toLocaleDateString()
    },
    {
      id: 4,
      name: 'Marketing',
      salary: 'Sales and Marketing',
      dob: new Date('1998-12-19').toLocaleDateString()
    },

  ];

  constructor() { }

  getEmployee() {
    return this.emplist;
  }
  addEmployee(data) {
    for (let i = 0; i < this.emplist.length; i++) {
      if (data == this.emplist[i]) {
        return this.emplist.splice(i, 1, data);
      }
    }
    this.emplist.push(data);
  }

  removeEmployee(data) {
    for (let i = 0; i < this.emplist.length; i++) {
      if (data == this.emplist[i]) {
        this.emplist.splice(i, 1);
      }
    }
  }

  editEmployee(data) {
    this.editdata = data;
  }
}

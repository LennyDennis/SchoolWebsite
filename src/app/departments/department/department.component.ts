import { Component, OnInit } from '@angular/core';
import { Department, Teacher } from 'src/app/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments:Department[]=[
    {id:"1",name:"Mathematics",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages....."},
    {id:"2",name:"Languages",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages....."},
    {id:"3",name:"Religion",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages....."},
  ]

  teachers:Teacher[]=[
    {name:"Lenny Dennis",subject:"Mathematics",departmentId:"1"},
    {name:"Lenny Dennis",subject:"Mathematics",departmentId:"1"},
    {name:"Lenny Dennis",subject:"Mathematics",departmentId:"1"},
    {name:"Lenny Dennis",subject:"English",departmentId:"2"},
    {name:"Lenny Dennis",subject:"Kiswahili",departmentId:"2"},
    {name:"Lenny Dennis",subject:"English",departmentId:"2"},
    {name:"Lenny Dennis",subject:"Kiswahili",departmentId:"2"},
    {name:"Lenny Dennis",subject:"C.R.E",departmentId:"3"},
    {name:"Lenny Dennis",subject:"Muslim",departmentId:"3"},
    {name:"Lenny Dennis",subject:"Hindu",departmentId:"3"}

  ]

  constructor() { }

  ngOnInit() {
  }

}

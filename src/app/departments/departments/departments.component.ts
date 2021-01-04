import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments:Department[]=[
    {id:1,name:"Mathematics",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages....."},
    {id:2,name:"Mathematics",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages....."},
    {id:3,name:"Mathematics",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages....."},

  ]

  constructor() { }

  ngOnInit() {
  }

}

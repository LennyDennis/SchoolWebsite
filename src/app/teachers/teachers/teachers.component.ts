import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers:Teacher[]=[
    {name:"Lenny Dennis",subject:"Mathematics",departmentId:1},
    {name:"John Doe",subject:"Mathematics",departmentId:1},
    {name:"Jane Doe",subject:"Mathematics",departmentId:1},
    {name:"Dennis Macharia",subject:"English",departmentId:2},
    {name:"Lenny Macharia",subject:"Kiswahili",departmentId:2},
    {name:"Jane Dennis",subject:"English",departmentId:2},
    {name:"John Dennis",subject:"English",departmentId:2},
    {name:"Lenny Doe",subject:"Muslim",departmentId:3},
    {name:"Lenny Doe",subject:"Hindu",departmentId:3},
    {name:"Lenny Dennis",subject:"C.R.E",departmentId:3},
    {name:"Lenny Macharia",subject:"Muslim",departmentId:3},
    {name:"Lenny Dennis",subject:"Hindu",departmentId:3},
    {name:"Lenny Doe",subject:"Physics",departmentId:4},
    {name:"Lenny Macharia",subject:"Chemistry",departmentId:4},
    {name:"Lenny Dennis",subject:"Physics",departmentId:4},
    {name:"Dennis Macharia",subject:"Biology",departmentId:4},
    {name:"Lenny Dennis",subject:"Computer Studies",departmentId:5},
    {name:"Lenny Macharia",subject:"Agriculture",departmentId:5},
    {name:"Lenny Doe",subject:"Business",departmentId:5}

  ]

  constructor() {}

  ngOnInit() {
  }

}

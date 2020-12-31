import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers:Teacher[]=[
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
    {name:"Lenny Dennis",subject:"Mathematics"},
  ]

  constructor() {}

  ngOnInit() {
  }

}

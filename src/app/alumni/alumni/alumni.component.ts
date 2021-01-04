import { Component, OnInit } from '@angular/core';
import { Alumni } from 'src/app/core';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  alumni:Alumni[]=[
    {name:"Lenny Dennis",start:"2010",end:"2014"},
    {name:"Lenny Macharia",start:"2010",end:"2014"},
    {name:"John Macharia",start:"2010",end:"2014"},
    {name:"Lenny Doe",start:"2010",end:"2014"},
    {name:"Lenny Macharia",start:"2010",end:"2014"},
    {name:"Lenny Doe",start:"2010",end:"2014"},
    {name:"John Doe Dennis",start:"2010",end:"2014"},
    {name:"Lenny Macharia",start:"2010",end:"2014"},
    {name:"Dennis Dennis",start:"2010",end:"2014"},
    {name:"Lenny Dennis",start:"2010",end:"2014"},
    {name:"Lenny Lenny",start:"2010",end:"2014"},
    {name:"Lenny Dennis",start:"2010",end:"2014"},
    {name:"Lenny Macharia",start:"2010",end:"2014"},

  ]

  constructor() { }

  ngOnInit() {
  }

}

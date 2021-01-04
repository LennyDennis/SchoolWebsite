import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departmentImage:String;

  departments:Department[]=[
    {id:1,name:"Mathematics",photo:"mathematics.jpg",description:"The Mathematics department goal is to instruct students at their capacity for intellectual knowledge and to prepare them for aesthetic appreciation, in-depth study, and critical thinking. The department aims to develop students' understanding of mathematical concepts, relationships, techniques and deductive logic, along with the precision and aesthetics involved in the study of mathematics, especially involving computer and calculator-based applications."},
    {id:2,name:"Languages",photo:"language.jpg",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages."},
    {id:3,name:"Religion",photo:"religious.jpg",description:"The study of religion involves exploration of scriptural texts, the wide range of historical and contemporary theological interpretations of those texts and the beliefs and practices that go with them, and the influence and power of religion in societies, cultures, and the lives of individual human beings"},
    {id:4,name:"Sciences",photo:"science.png",description:"Science Department comprises of the following subjects: Biology,  Chemistry,  Physics. Science is about a whole lot more than that and to sum it up we believe that science is a way of helping the brain grow in finding new knowledge and helps us defeat our curiosity of how the world develops and works today."},
    {id:5,name:"Technical and Appiled",photo:"appliedscience.jpg",description:"The technical and applied studies department is one of the academic departments at Baricho High School. The department has five teaching subjects namely, Agriculture, Computer Studies, French, Electricity and Business Studies."},
  ]

  constructor() { }

  ngOnInit() {
  }

}

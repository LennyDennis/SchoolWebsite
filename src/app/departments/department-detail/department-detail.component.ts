import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department, Teacher } from 'src/app/core';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department: Department;
  id:number;

  departments:Department[]=[
    {id:1,name:"Mathematics",photo:"mathematics.jpg",description:"The Mathematics department goal is to instruct students at their capacity for intellectual knowledge and to prepare them for aesthetic appreciation, in-depth study, and critical thinking. The department aims to develop students' understanding of mathematical concepts, relationships, techniques and deductive logic, along with the precision and aesthetics involved in the study of mathematics, especially involving computer and calculator-based applications."},
    {id:2,name:"Languages",photo:"language.jpg",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages."},
    {id:3,name:"Religion",photo:"religious.jpg",description:"The study of religion involves exploration of scriptural texts, the wide range of historical and contemporary theological interpretations of those texts and the beliefs and practices that go with them, and the influence and power of religion in societies, cultures, and the lives of individual human beings"},
    {id:4,name:"Sciences",photo:"science.png",description:"Science Department comprises of the following subjects: Biology,  Chemistry,  Physics. Science is about a whole lot more than that and to sum it up we believe that science is a way of helping the brain grow in finding new knowledge and helps us defeat our curiosity of how the world develops and works today."},
    {id:5,name:"Technical and Appiled",photo:"appliedscience.jpg",description:"The technical and applied studies department is one of the academic departments at Baricho High School. The department has five teaching subjects namely, Agriculture, Computer Studies, French, Electricity and Business Studies."},
  ]

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

  constructor(private router: Router,  private route: ActivatedRoute
    ){
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
       return false;
    }

    this.router.events.subscribe((evt) => {
       if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
       }
   });

}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.department = this.departments[(this.id)-1];
  }

  filterTeachersByDepartment(id){
    return this.teachers.filter(x => x.departmentId == id);
}



}

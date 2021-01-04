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
    {id:1,name:"Mathematics",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages....."},
    {id:2,name:"Languages",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages....."},
    {id:3,name:"Religion",description:"Language Department comprises of the following subjects: English: Kiswahili The students are also expected to undertake English Literature and Kiswahili Fasihi for the Development of students communication in both National languages....."},
  ]

  teachers:Teacher[]=[
    {name:"Lenny Dennis",subject:"Mathematics",departmentId:1},
    {name:"Lenny Dennis",subject:"Mathematics",departmentId:1},
    {name:"Lenny Dennis",subject:"Mathematics",departmentId:1},
    {name:"Lenny Dennis",subject:"English",departmentId:2},
    {name:"Lenny Dennis",subject:"Kiswahili",departmentId:2},
    {name:"Lenny Dennis",subject:"English",departmentId:2},
    {name:"Lenny Dennis",subject:"Kiswahili",departmentId:2},
    {name:"Lenny Dennis",subject:"C.R.E",departmentId:3},
    {name:"Lenny Dennis",subject:"Muslim",departmentId:3},
    {name:"Lenny Dennis",subject:"Hindu",departmentId:3}

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

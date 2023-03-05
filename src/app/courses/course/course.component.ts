import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course = 
    {
        id: 1,
        title: "آموزش مقدماتی انگولار",
        description: "در این دوره با مفاهیم اساسی انگولار آشنا می شوید. این دوره کوتاه با معرفی انگولار به عنوان یکی از برترین فریم ورک های جاوااسکریپت آغاز شده و ...",
        level: "BEGINNER",
        imageUrl: 'angular_advance.jpeg'
    };
  constructor() { }

  ngOnInit(): void {
  }

}

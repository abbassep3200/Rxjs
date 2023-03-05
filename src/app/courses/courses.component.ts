import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { createHttpObservable } from '../common/helpers';
import { Course } from './model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advanceCourses$: Observable<Course[]>;
  selectedTab = 'beginners';

  selectedCourse: Course | undefined;

  constructor() {}

  ngOnInit(): void {
   
    const http$ = createHttpObservable('http://localhost:3000/courses');

    const courses$: Observable<Course[]> = http$.pipe(
      tap(() => console.log('HTTP request executed')),
      map((res) => res['data']),
      shareReplay()
    );

    

    this.beginnerCourses$ = courses$.pipe(
      map((courses) => courses.filter((course) => course.level === 'BEGINNER'))
    );

    this.advanceCourses$ = courses$.pipe(
      map((courses) => courses.filter((course) => course.level === 'ADVANCE'))
    );
  }

  onUpdateCourse(course: Course) {
    this.selectedCourse = course;

  }
}

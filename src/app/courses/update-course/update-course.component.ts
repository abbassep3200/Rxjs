import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../model/course';


@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  @Input()
  course: Course;
  form: FormGroup;
  @Output() closeDialog = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.course.title, Validators.required),
      description: new FormControl(this.course.description, Validators.required),
      level: new FormControl(this.course.level),
      imageUrl: new FormControl(this.course.imageUrl)
    });
  }

  onCloseDialog() {
    this.closeDialog.emit();
  }

}

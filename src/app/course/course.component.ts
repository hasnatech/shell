import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [
    trigger('changeState', [
      state('close', style({
        transform: 'translate(0px,-100%)'
      })),
      state('open', style({
        transform: 'translate(0px,0%)'
      })),
      transition('*=>close', animate('300ms')),
      transition('*=>open', animate('2000ms'))
    ])
  ]
})
export class CourseComponent implements OnInit {

  constructor(private router: Router) { }
  
  @Input() currentState;

  showWindow;

  ngOnInit() {
    this.closeWindow()
  }

  openWindow(){
    this.currentState = 'open';
    this.showWindow = true;
  }

  closeWindow(){
    this.currentState = 'close';
    this.showWindow = false;
  }


  startBtn(){
    this.router.navigate(['/course/1/page/1'])
  }

  content = {
    "course": {
      "welcome": "Welcome to Danfoss",
      "title": "Introduction to Refrigeration",
      "topic": "",
      "description": "This module will discuss the overall purpose of the e-learning course and also provide an introduction to Refrigeration. This will need 12 minutes to complete.",
      "start_btn": "start the course",
      "audio": "media/topic1_welcome.mp3",
      "logo" : "assets/course1/splashscreen_logo.png"
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  constructor() { }
  @Input() content;
  ngOnInit() {
  }

}

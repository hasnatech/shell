import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shell-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

  @Input() content;
  constructor() { }

  ngOnInit() {
  }

}

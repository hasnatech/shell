import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'htmltext',
  templateUrl: './htmltext.component.html',
  styleUrls: ['./htmltext.component.scss']
})
export class HtmltextComponent implements OnInit {

  @Input() content;

  constructor(public service:CommonService) { }

  ngOnInit() {
  }

}

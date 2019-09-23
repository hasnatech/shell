import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private service:CommonService) { }

  content;
  ngOnInit() {
    this.content = this.service.content;
    this.page = this.service.getPageContent();
  }
  curr_page = this.service.curr_page;
  total_page = 3;
  audio_icon = "audio.png";
  page;
  
}

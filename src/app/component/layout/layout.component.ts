import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private service: CommonService) { }

  content;
  page;
  show_layout = false;
  show_component = false;
  insertAt = 0;
  ngOnInit() {
    this.content = this.service.content;
    this.page = this.content.menu.topic[0];
  }
  addLayout(style) {
    console.log(style);
    switch (style) {
      case 'single':
        this.page.row.splice(this.insertAt, 0, this.addRow(['cell_full']));
        break;

      case '30_70':
        this.page.row.splice(this.insertAt, 0, this.addRow(['cell_3', 'cell_7']));
        break;

      case '70_30':
        this.page.row.splice(this.insertAt, 0, this.addRow(['cell_7', 'cell_3']));
        break;

      case '50_50':
        this.page.row.splice(this.insertAt, 0, this.addRow(['cell_5', 'cell_5']));
        break;
      case '3':
        this.page.row.splice(this.insertAt, 0, this.addRow(['cell_33', 'cell_33', 'cell_33']));
        break;
      case '4':
        this.page.row.splice(this.insertAt, 0, this.addRow(['cell_25', 'cell_25', 'cell_25', 'cell_25']));
        break;
      default:
        break;
    }
    this.show_layout = false;
  }



  addRow(cls) {
    let clsArr = [];
    for (let index = 0; index < cls.length; index++) {
      const element = {
        "class": cls[index]
      };
      clsArr.push(element);
    }
    return {
      "block": clsArr
    }
  }
  currentRow = 0;
  currentCell = 0;
  addBlock(i, j) {
    this.currentRow = i;
    this.currentCell = j;
    this.show_component = true;
  }

  addComponent(name) {
    switch (name) {
      case 'heading':
        this.page.row[this.currentRow].block[this.currentCell]['component'] = {
          "type": "heading",
          "content": {
            "tag": "h1",
            "value": "Heading"
          }
        };
        break;
      case 'paragraph':
        this.page.row[this.currentRow].block[this.currentCell]['component'] = {
          "type": "htmltext",
          "content": {
            "tag": "htmltext",
            "value": "Text"
          }
        };
        break;
      case 'image':
        this.page.row[this.currentRow].block[this.currentCell]['component'] = {
          "type": "image",
          "content": {
            "tag": "image",
            "value": "assets/sample/sample.png",
            "attr":"Alt text"
          }
        };
        break;
      case 'audio':
        this.page.row[this.currentRow].block[this.currentCell]['component'] = {
          "type": "audio",
          "content": {
            "tag": "audio",
            "value": "assets/sample/audio.mp3"
          }
        };
        break;
      case 'video':
        this.page.row[this.currentRow].block[this.currentCell]['component'] = {
          "type": "video",
          "content": {
            "tag": "video",
            "value": "assets/sample/video.mp4"
          }
        };
        break;


      default:
        break;
    }
    this.show_component = false;
  }

}


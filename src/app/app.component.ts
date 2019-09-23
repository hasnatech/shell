import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  htmlText ="Sample Text"
  submitButton(){
    console.log(this.htmlText); 
  } 
}

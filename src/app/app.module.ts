import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { HtmltextComponent } from './component/htmltext/htmltext.component';
import { PageComponent } from './course/page/page.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HeadingComponent } from './component/heading/heading.component';
import { TextComponent } from './component/text/text.component';
import { ImageComponent } from './component/image/image.component';
import { AudioComponent } from './component/audio/audio.component';
import { VideoComponent } from './component/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CourseComponent,
    HtmltextComponent,
    PageComponent,
    LayoutComponent,
    HeadingComponent,
    TextComponent,
    ImageComponent,
    AudioComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike', 'link'],        // toggled buttons
          //['blockquote', 'code-block'],

          //[{ 'header': 1 }, { 'header': 2 }],    
          [{ 'script': 'sub' }, { 'script': 'super' }],  // superscript/subscript
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],              // custom button values
            
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          //[{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          //['link', 'image', 'video']                         // link and image, video
        ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

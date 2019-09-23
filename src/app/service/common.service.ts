import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  mode = "edit";
  //mode = "course";
  curr_page = 0;

  constructor() { }
  getPageContent() {
    return this.content.menu.topic[this.curr_page];
  }
  setPageNo(n) {
    this.curr_page = n;
  }
  content = {
    "course": {
      "welcome": "Welcome to Danfoss",
      "title": "Introduction to Refrigeration",
      "topic": "",
      "description": "This module will discuss the overall purpose of the e-learning course and also provide an introduction to Refrigeration. This will need 12 minutes to complete.",
      "start_btn": "start the course",
      "audio": "media/topic1_welcome.mp3",
      "logo": "assets/course1/splashscreen_logo.png"
    },

    "menu": {
      "topic": [
        {
          "title": "Objective ",
          "audio": "media/topic1_pg1.mp3",
          "row": [
            {
              "block": [
                {
                  "class": "cell_5",
                  "component": {
                    "type": "image",
                    "content": {
                      "tag": "image",
                      "value": "assets/sample/sample.png",
                      "attr": "Alt text"
                    }
                  }
                },
                {
                  "class": "cell_5",
                  "component": {
                    "type": "htmltext",
                    "content": {
                      "tag": "htmltext",
                      "value": `
                      <p>At the end of this topic, you will be able to:</p><ul><li>Define refrigeration and cooling</li><li>List the application of refrigeration in household and industries</li><li>Analyse how time and temperature influences the growth of micro-organisms in food</li></ul>`
                    }
                  }
                }
              ]
            },
            {
              "block": [
                {
                  "class": "cell_full",
                  "component": {
                    "type": "heading",
                    "content": {
                      "tag": "h1",
                      "value": "Optyma opláštěné kondenzační jednotky"
                    }
                  }
                }
              ]
            },
            {
              "block": [
                {
                  "class": "cell_full",
                  "component": {
                    "type": "heading",
                    "content": {
                      "tag": "h1",
                      "value": "शीथेड कंडेनसर यूनिट का विकल्प"
                    }
                  }
                }
              ]
            },
            {
              "block": [
                {
                  "class": "cell_full",
                  "component": {
                    "type": "heading",
                    "content": {
                      "tag": "h1",
                      "value": "உறைந்த மின்தேக்கி அலகுக்கான விருப்பங்கள்"
                    }
                  }
                }
              ]
            },
            {
              "block": [
                {
                  "class": "cell_3",
                  "component": {
                    "type": "htmltext",
                    "content": {
                      "tag": "htmltext",
                      "value": "Text"
                    }
                  }
                },
                {
                  "class": "cell_7",
                  "component": {
                    "type": "heading",
                    "content": {
                      "tag": "h1",
                      "value": "铠装冷凝机组操作"
                    }
                  }
                }
              ]
            },
            {
              "block": [
                {
                  "class": "cell_full",
                  "component": {
                    "type": "heading",
                    "content": {
                      "tag": "h1",
                      "value": "Heading"
                    }
                  }
                }
              ]
            },
            {
              "block": [
                {
                  "class": "cell_full",
                  "component": {
                    "type": "htmltext",
                    "content": {
                      "tag": "htmltext",
                      "value": "Text"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "title": "Refrigeration",
          "file": "common/text_image_right.html",
          "audio": "media/topic1_pg2.mp3",
          "showMenu": true,
          "interaction": false,
          "text": {
            "p": ["Cold beverages and ice creams are our favourite treats during summer. ",
              "We all know that refrigeration is the best way to keep things cool and fresh.",
              "We will explore more about Refrigeration in this module."
            ]
          },
          "image": "image/topic1/ref_t1_p3.jpg"
        },
        {
          "title": "Why refrigerate?",
          "file": "common/text_image_right.html",
          "audio": "media/topic1_pg3.mp3",
          "showMenu": true,
          "interaction": false,
          "text": {
            "p": ["Refrigeration reduces the temperature of a substance by removing energy - in the form of heat.",
              "Cold beverages and ice creams in refrigerator. It is cool.",
              "<b>Cooling:</b>",
              "A natural or an artificial process by which heat is dissipated. "
            ]

          },
          "image": "image/topic1/t1_page4.jpg"
        }
      ]
    }
  }
}

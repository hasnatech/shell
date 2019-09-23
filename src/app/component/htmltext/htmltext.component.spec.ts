import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmltextComponent } from './htmltext.component';

describe('HtmltextComponent', () => {
  let component: HtmltextComponent;
  let fixture: ComponentFixture<HtmltextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmltextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmltextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

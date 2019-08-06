import { Component, OnInit } from '@angular/core';
import './string-extension';

@Component({
  selector: 'tl-test-lib',
  template: `
    Does the string start with a '1'!?
    <br/>
    <input #inputText (keyup)="onKey(inputText.value)">
    <br/>
    Result : {{resultBoolean}}
  `,
  styles: []
})
export class TestLibComponent implements OnInit {

  resultBoolean = false;
  constructor() { }

  ngOnInit() {
  }

  onKey(value: string) {
    this.resultBoolean = value.beginsWithOne();
  }

}

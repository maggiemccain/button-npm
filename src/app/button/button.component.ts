import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<p>
  button works!
</p>

<button (click)="onClick()">Click here</button>`,
  styles: [`
    button {
      background-color: orange;
      width: 200px;
    }`]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log('BUTTON WAS CLICKED')
  }

}

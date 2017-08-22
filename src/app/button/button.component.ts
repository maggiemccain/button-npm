import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<p>
  button works!
</p>

<button (click)="onClick()">{{message}}</button>`,
  styles: [`
    button {
      background-color: orange;
      width: 200px;
    }`]
})
export class ButtonComponent implements OnInit {
  message = 'click the button';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log('BUTTON WAS CLICKED')
  }

}

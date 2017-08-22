import { Component } from '@angular/core';

@Component({
  selector: 'app-amazing',
  template: `<h1>
  Amazing works! 
</h1>
`,
  styles: [`
    h1 {
      color: pink;
    }`]
})
export class AmazingComponent {
  title = 'app works!';
}

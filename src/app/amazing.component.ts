import { Component } from '@angular/core';

@Component({
  selector: 'app-amazing',
  template: `<h1 [innerHTML]="title">
</h1>
`,
  styles: [`
    h1 {
      color: pink;
    }`]
})
export class AmazingComponent {
  title = 'this thing works!';
}

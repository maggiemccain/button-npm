import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AmazingComponent } from './amazing.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AmazingComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [ButtonComponent, AmazingComponent],
  bootstrap: [AmazingComponent]
})
export class AmazingModule { }
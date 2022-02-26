import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLibComponent } from './my-lib.component';




@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import {HttpClientModule} from '@angular/common/http'

console.log("module.......loaded");
@NgModule({
  declarations: [
    AppComponent,
    FacultyComponent,
    StudentComponent,
    
    
    
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule,ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

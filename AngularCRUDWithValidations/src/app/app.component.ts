import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { Book } from './book';
import { CommonService } from './common.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { map,filter } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
  })
export class AppComponent implements OnInit {
  registerForm:FormGroup;
  bookList:Book[];
  book:Book;
  buttenText:string="Register";
  bookname:string;
  isSubmit:boolean=false;
    constructor(private _common:CommonService, private _fb:FormBuilder)
  { 


    _common.getAllData().subscribe((res:Book[])=>{
this.bookList=res;});
    
   
}
  ngOnInit(): void {
    
    this.registerForm=this._fb.group({
      id:[''],
      name:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
      category:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
      price:['',Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(4)])]
    })
  }

getBook()
{
  this._common.getSingleRecord(3).map(book=>book.name).subscribe(bookname=>{
this.bookname=bookname;
  })
}

onRegister()
{
  
   if(this.registerForm.controls['id'].value==0)
   {
    this._common.addBook(this.registerForm.value).subscribe(res=>{})
   }else{
     this._common.updateData(this.registerForm.value).subscribe(res=>{})
   }
   
  }
  deleteData(id:any){
this._common.deleteRecord(id).subscribe(res=>{})
  }
  resetData()
  {
    this.registerForm.reset();
  }
  updateData(id:any)
  {
    this.buttenText="Update";
  this._common.editdata(id).subscribe(book=>{
    console.log(book);
    this.registerForm.controls['id'].setValue(book.id)
    this.registerForm.controls['name'].setValue(book.name)
    this.registerForm.controls['category'].setValue(book.category)
    this.registerForm.controls['price'].setValue(book.price)
    
  })

  }
 

}

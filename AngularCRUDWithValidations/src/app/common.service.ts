import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
bookUrl:string="http://localhost:3000/Book";
  constructor(private _http:HttpClient) { }
getAllData():Observable<Book[]>
{
return this._http.get<Book[]>(this.bookUrl);
}
getSingleRecord(id:number):Observable<Book>
{
return this._http.get<Book>(this.bookUrl+"/"+id);
}
addBook(book:Book):Observable<Book>
{
return this._http.post<Book>(this.bookUrl,book);
}
deleteRecord(id:any):Observable<Book>
{
return this._http.delete<Book>(this.bookUrl+"/"+id)
}
editdata(id:any):Observable<Book>
{
  return this._http.get<Book>(this.bookUrl+"/"+id);
}
updateData(modifiedbook:Book):Observable<Book>
{
return this._http.put<Book>(this.bookUrl+"/"+modifiedbook.id,modifiedbook);
}
}

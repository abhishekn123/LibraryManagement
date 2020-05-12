import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Books } from "../Store/AllBooksData";
@Injectable({
  providedIn: "root",
})
export class LibraryserviceService {
  constructor(private http: HttpClient) {}
  MyBook = Books;
  Register(data) {
    //Json data is stored inside the 'data' variable
    console.log("User Register Data", data);
    return this.http.post("http://localhost:64664/api/Signup",data);
  }
  Login(data) {
    console.log("User Login Data", data);
    return this.http.post("http://localhost:64664/api/Login",data);
  }
  getAllBooks() {
    console.log(this.MyBook);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LibraryserviceService {
  constructor(private http: HttpClient) {}
  Register(data) {
    //Json data is stored inside the 'data' variable
    console.log("User Register Data", data);
    return this.http.get("copy paste the api Register url here");
  }
  Login(data) {
    console.log("User Login Data", data);
    return this.http.get("copy paste the api Login url here");
  }
}

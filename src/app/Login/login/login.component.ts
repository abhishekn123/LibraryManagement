import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LibraryserviceService } from "src/app/service/libraryservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private service: LibraryserviceService) {}

  ngOnInit(): void {}
  Login = new FormGroup({
    Email: new FormControl("", [Validators.email, Validators.required]),
    Password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  DoLogin() {
    this.service.Login({
      email: this.Login.get("Email").value,
      password: this.Login.get("Password").value,
    }).subscribe(data=>
      {
        console.log(data)
      });
  }
}

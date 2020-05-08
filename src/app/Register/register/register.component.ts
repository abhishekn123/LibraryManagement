import { Component, OnInit } from "@angular/core";
import { Inputvalidator } from "./../Validator";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { EmailValidator } from "./../../Validator/EmailValidator";
import { PasswordValidator } from "./../../Validator/PasswordValidator";
import { LibraryserviceService } from "src/app/service/libraryservice.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(private service: LibraryserviceService) {}
  UserName;
  Email;
  Password;
  ConfirmPassword;
  selectoption = ["USER", "AUTHOR"];
  Role = new FormControl("", Validators.required);
  Register = new FormGroup(
    {
      UserName: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      Email: new FormControl("", [Validators.email, Validators.required]),
      Password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      ConfirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    { validators: PasswordValidator }
  );
  Emailmatcher;
  PasswordMatcher;
  DoRegister() {
    this.service
      .Register({
        username: this.UserName,
        email: this.Email,
        password: this.Password,
        Role: this.Role.value,
      })
      .subscribe(
        (data) => {
          //on login sucessfull this block got executed and the response is stored in the 'data' variable
          console.log(data);
        },
        (err) => {
          //Any Error Happened on the server this block gets executed or when error response sent this block got executed
          console.log(err);
        }
      );
  }
  ngOnInit(): void {
    this.Emailmatcher = new EmailValidator();
  }
}

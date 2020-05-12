import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-addbook",
  templateUrl: "./addbook.component.html",
  styleUrls: ["./addbook.component.css"],
})
export class AddbookComponent implements OnInit {
  selectoption = ["USER", "AUTHOR"];
  Role = new FormControl("", Validators.required);
  AddBook = new FormGroup({
    NAME: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Author: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });
  constructor() {}

  ngOnInit(): void {}
  AddBooks() {}
}

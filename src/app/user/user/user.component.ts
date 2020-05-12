import { Component, OnInit, Input } from "@angular/core";
import "material-design-icons/iconfont/material-icons.css";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  @Input() UserState;
  constructor() {}
  ngOnInit(): void {}
  userloggedin = false;
}

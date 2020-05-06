import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var HOME = document.getElementById("HOME");
    HOME.style.borderBottomWidth = "3px";
    HOME.style.borderBottomColor = "blue";
    HOME.style.borderBottomStyle = "solid";
  }
  //CSS DESIGN STARTS HERE

  navigate(event) {
    document.getElementById("HOME").style.borderBottom = "0px solid red";
    document.getElementById("AUTHOR").style.borderBottom = "0px solid red";
    document.getElementById("ADDBOOK").style.borderBottom = "0px solid red";

    document.getElementById("HOME").style.transitionTimingFunction = "linear";
    document.getElementById(event).style.borderBottom = "3px solid blue";
  }
  //CSS DESIGN ENDS HERE
}

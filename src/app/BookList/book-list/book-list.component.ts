import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})
export class BookListComponent implements OnInit {
  @Input() BOOKNAME: string;
  @Input() AUTHORNAME: string;

  constructor() {}
  like = "fas fa-hear";
  ngOnInit(): void {
    document.getElementById("heart").className = "far fa-heart";
    console.log(this.BOOKNAME, this.AUTHORNAME);
  }
  liked() {
    let ele = document.getElementById("heart").className;
    ele === "far fa-heart"
      ? ((ele = "fas fa-heart"),
        (document.getElementById("heart").style.color = "red"))
      : ((ele = "far fa-heart"),
        (document.getElementById("heart").style.color = "black"));
    document.getElementById("heart").className = ele;
  }
}

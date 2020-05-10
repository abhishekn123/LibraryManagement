import { Component, OnInit, Input } from "@angular/core";
import "material-design-icons/iconfont/material-icons.css";
import { Books } from "src/app/Store/AllBooksData";
import { LibraryserviceService } from "src/app/service/libraryservice.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})
export class BookListComponent implements OnInit {
  @Input() BOOKNAME: string;
  @Input() AUTHORNAME: string;
  @Input() Like: number;
  @Input() IconName: string;
  @Input() id: number;

  constructor(private service: LibraryserviceService) {
    this.like === "favorite"
      ? this.like === "favorite"
      : this.like === "favorite_border";
  }
  IconColor = "black";
  like = "favorite_border";
  ngOnInit(): void {}
  liked() {
    let returnedBook;
    returnedBook = this.service.MyBook.find((book) => book.id === this.id);
    let returndecIndex = this.service.MyBook.findIndex(
      (book) => book === returnedBook
    );

    this.like === "favorite_border"
      ? ((this.like = "favorite"),
        (this.IconColor = "red"),
        (this.service.MyBook[returndecIndex].Likes =
          this.service.MyBook[returndecIndex].Likes + 1))
      : ((this.like = "favorite_border"),
        (this.IconColor = "black"),
        (this.service.MyBook[returndecIndex].Likes =
          this.service.MyBook[returndecIndex].Likes - 1));
  }
}

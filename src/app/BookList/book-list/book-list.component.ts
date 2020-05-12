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
  @Input() category;

  constructor(private service: LibraryserviceService) {
    this.like === "favorite"
      ? this.like === "favorite"
      : this.like === "favorite_border";
  }
  IconColor = "black";
  like = "favorite_border";
  arrayofbook = [];
  ngOnInit(): void {}
  liked() {
    let returnedBook;
    if (this.category === "ArtsAndMusic") {
      this.arrayofbook = this.service.ArtsAndMusic;
    } else if (this.category === "Biographies") {
      this.arrayofbook = this.service.Biographies;
    } else if (this.category === "Business") {
      this.arrayofbook = this.service.Business;
    } else if (this.category === "Health") {
      this.arrayofbook = this.service.Health;
    } else if (this.category === "Sports") {
      this.arrayofbook = this.service.Sports;
    } else if (this.category === "Literature") {
      this.arrayofbook = this.service.Literature;
    }

    returnedBook = this.arrayofbook.find((book) => book.id === this.id);
    let returndecIndex = this.arrayofbook.findIndex(
      (book) => book === returnedBook
    );

    this.like === "favorite_border"
      ? ((this.like = "favorite"),
        (this.IconColor = "red"),
        (this.arrayofbook[returndecIndex].Likes =
          this.arrayofbook[returndecIndex].Likes + 1))
      : ((this.like = "favorite_border"),
        (this.IconColor = "black"),
        (this.arrayofbook[returndecIndex].Likes =
          this.arrayofbook[returndecIndex].Likes - 1));
  }
}

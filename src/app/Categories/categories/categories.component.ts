import { Component, OnInit } from "@angular/core";
import { Books } from "./../../Store/AllBooksData";
import { LibraryserviceService } from "src/app/service/libraryservice.service";
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  constructor(private service: LibraryserviceService) {}
  AllBooks = this.service.MyBook;
  icon = "favorite_border";
  getAllBooks() {
    this.AllBooks = this.service.MyBook;
  }
  ngOnInit(): void {}
}

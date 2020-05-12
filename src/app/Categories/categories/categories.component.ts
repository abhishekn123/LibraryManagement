import { Component, OnInit } from "@angular/core";
import { Books } from "./../../Store/AllBooksData";
import { LibraryserviceService } from "src/app/service/libraryservice.service";
import { PageEvent } from "@angular/material/paginator";
import { ArtsAndMusic } from "./../../Store/ArtsandMusic";
import { Biographies } from "./../../Store/Biographies";
import { Health } from "./../../Store/Health";
import { Business } from "./../../Store/Business";
import { Literature } from "./../../Store/Literature";
import { Sports } from "./../../Store/Sports";
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  constructor(public service: LibraryserviceService) {}
  AllBooks = this.service.MyBook;
  ArtsAndMusic = this.service.ArtsAndMusic;
  Biographies = this.service.Biographies;
  Health = this.service.Health;
  Business = this.service.Business;
  Literature = this.service.Literature;
  Sports = this.service.Sports;
  icon = "favorite_border";
  getAllBooks() {
    this.AllBooks = this.service.MyBook;
  }
  AllBooklowValue: number = 0;
  AllBookhighValue: number = 3;
  AllBookpageIndex: number = 0;
  AllBookpageSize: number = 3;
  getbook(event: PageEvent) {
    if (event.pageIndex === this.AllBookpageIndex + 1) {
      this.AllBooklowValue = this.AllBooklowValue + this.AllBookpageSize;
      this.AllBookhighValue = this.AllBookhighValue + this.AllBookpageSize;
    } else if (event.pageIndex === this.AllBookpageIndex - 1) {
      this.AllBooklowValue = this.AllBooklowValue - this.AllBookpageSize;
      this.AllBookhighValue = this.AllBookhighValue - this.AllBookpageSize;
    }
    this.AllBookpageIndex = event.pageIndex;
  }
  ArtslowValue: number = 0;
  ArtshighValue: number = 3;
  ArtspageIndex: number = 0;
  ArtspageSize: number = 3;
  getArtsAndMusic(event: PageEvent) {
    if (event.pageIndex === this.ArtspageIndex + 1) {
      this.ArtslowValue = this.ArtslowValue + this.ArtspageSize;
      this.ArtshighValue = this.ArtshighValue + this.ArtspageSize;
    } else if (event.pageIndex === this.ArtspageIndex - 1) {
      this.ArtslowValue = this.ArtslowValue - this.ArtspageSize;
      this.ArtshighValue = this.ArtshighValue - this.ArtspageSize;
    }
    this.ArtspageIndex = event.pageIndex;
  }
  BiographieslowValue: number = 0;
  BiographieshighValue: number = 3;
  BiographiespageIndex: number = 0;
  BiographiespageSize: number = 3;
  getBiographies(event: PageEvent) {
    if (event.pageIndex === this.BiographiespageIndex + 1) {
      this.BiographieslowValue =
        this.BiographieslowValue + this.BiographiespageSize;
      this.BiographieshighValue =
        this.BiographieshighValue + this.BiographiespageSize;
    } else if (event.pageIndex === this.BiographiespageIndex - 1) {
      this.BiographieslowValue =
        this.BiographieslowValue - this.BiographiespageSize;
      this.BiographieshighValue =
        this.BiographieshighValue - this.BiographiespageSize;
    }
    this.BiographiespageIndex = event.pageIndex;
  }

  BusinesslowValue: number = 0;
  BusinesshighValue: number = 3;
  BusinesspageIndex: number = 0;
  BusinesspageSize: number = 3;
  getBusiness(event: PageEvent) {
    if (event.pageIndex === this.BusinesspageIndex + 1) {
      this.BusinesslowValue = this.BusinesslowValue + this.BusinesspageSize;
      this.BusinesshighValue = this.BusinesshighValue + this.BusinesspageSize;
    } else if (event.pageIndex === this.BusinesspageIndex - 1) {
      this.BusinesslowValue = this.BusinesslowValue - this.BusinesspageSize;
      this.BusinesshighValue = this.BusinesshighValue - this.BusinesspageSize;
    }
    this.BusinesspageIndex = event.pageIndex;
  }

  HealthlowValue: number = 0;
  HealthhighValue: number = 3;
  HealthpageIndex: number = 0;
  HealthpageSize: number = 3;
  getHealth(event: PageEvent) {
    if (event.pageIndex === this.HealthpageIndex + 1) {
      this.HealthlowValue = this.HealthlowValue + this.HealthpageSize;
      this.HealthhighValue = this.HealthhighValue + this.HealthpageSize;
    } else if (event.pageIndex === this.HealthpageIndex - 1) {
      this.HealthlowValue = this.HealthlowValue - this.HealthpageSize;
      this.HealthhighValue = this.HealthhighValue - this.HealthpageSize;
    }
    this.HealthpageIndex = event.pageIndex;
  }

  SportslowValue: number = 0;
  SportshighValue: number = 3;
  SportspageIndex: number = 0;
  SportspageSize: number = 3;
  getSports(event: PageEvent) {
    if (event.pageIndex === this.SportspageIndex + 1) {
      this.SportslowValue = this.SportslowValue + this.SportspageSize;
      this.SportshighValue = this.SportshighValue + this.SportspageSize;
    } else if (event.pageIndex === this.SportspageIndex - 1) {
      this.SportslowValue = this.SportslowValue - this.SportspageSize;
      this.SportshighValue = this.SportshighValue - this.SportspageSize;
    }
    this.SportspageIndex = event.pageIndex;
  }

  LiteraturelowValue: number = 0;
  LiteraturehighValue: number = 3;
  LiteraturepageIndex: number = 0;
  LiteraturepageSize: number = 3;
  getLiterature(event: PageEvent) {
    if (event.pageIndex === this.LiteraturepageIndex + 1) {
      this.LiteraturelowValue =
        this.LiteraturelowValue + this.LiteraturepageSize;
      this.LiteraturehighValue =
        this.LiteraturehighValue + this.LiteraturepageSize;
    } else if (event.pageIndex === this.LiteraturepageIndex - 1) {
      this.LiteraturelowValue =
        this.LiteraturelowValue - this.LiteraturepageSize;
      this.LiteraturehighValue =
        this.LiteraturehighValue - this.LiteraturepageSize;
    }
    this.LiteraturepageIndex = event.pageIndex;
  }
  ngOnInit(): void {}
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./NavBar/navbar/navbar.component";
import { CategoriesComponent } from "./Categories/categories/categories.component";
import { BookListComponent } from "./BookList/book-list/book-list.component";
import { FooterComponent } from "./footer/footer.component";
import { RegisterComponent } from "./Register/register/register.component";
import { LoginComponent } from "./Login/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LibraryserviceService } from "./service/libraryservice.service";
import { AngularMaterialModule } from "./Material/angular-material/angular-material.module";
import { HomeComponent } from "./Home/home/home.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    BookListComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [LibraryserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

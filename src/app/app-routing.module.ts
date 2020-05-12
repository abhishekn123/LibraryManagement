import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./Login/login/login.component";
import { HomeComponent } from "./Home/home/home.component";
import { RegisterComponent } from "./Register/register/register.component";
import { AddbookComponent } from "./AddBook/addbook/addbook.component";
const routes: Routes = [
  {
    path: "Login",
    component: LoginComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "Register",
    component: RegisterComponent,
  },
  {
    path: "AddBook",
    component: AddbookComponent,
  },
  {
    path: "Home",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./books/list/list.component";
import {CreateComponent} from "./books/create/create.component";
import {DetailsComponent} from "./books/details/details.component";
import {UpdateComponent} from "./books/update/update.component";

const routes: Routes = [
  {
    path: "books",
    component: ListComponent
  },
  {
    path: "books/create",
    component: CreateComponent
  },
  {
    path: "books/detail",
    component: DetailsComponent
  },
  {
    path: 'edit/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

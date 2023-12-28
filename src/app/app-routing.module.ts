import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './Day08/author-list/author-list.component';
import { AuthorDetailComponent } from './Day08/author-detail/author-detail.component';
import { Day08Component } from './Day08/day08/day08.component'


const routes: Routes = [
  { path: 'day08', component: Day08Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './Day08/author-list/author-list.component';
import { AuthorDetailComponent } from './Day08/author-detail/author-detail.component';
import { Day08Component } from './Day08/day08/day08.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { NumberListComponent } from './number-list/number-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    Day08Component,
    ObservableDemoComponent,
    UserListComponent,
    AuthComponent,
    NumberListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

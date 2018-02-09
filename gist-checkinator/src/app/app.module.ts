import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GistEntryViewComponent } from './gist-entry-view/gist-entry-view.component';
import { GistListViewComponent } from './gist-list-view/gist-list-view.component';


@NgModule({
  declarations: [
    AppComponent,
    GistEntryViewComponent,
    GistListViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

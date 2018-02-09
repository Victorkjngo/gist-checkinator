import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GistEntryViewComponent } from './gist-entry-view/gist-entry-view.component';
import { GistListViewComponent } from './gist-list-view/gist-list-view.component';
import { GistService } from './gist.service';


@NgModule({
  declarations: [
    AppComponent,
    GistEntryViewComponent,
    GistListViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

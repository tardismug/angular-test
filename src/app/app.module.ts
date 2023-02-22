import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosService } from '../photos/photos.service';

@NgModule({
  declarations: [AppComponent, PhotosListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [PhotosService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-module.routing';

import { AppComponent } from './app.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosService } from '../photos/photos.service';
import { PhotosTableComponent } from './photos-table/photos-table.component';

@NgModule({
  declarations: [AppComponent, PhotosListComponent, PhotosTableComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [PhotosService],
  bootstrap: [AppComponent],
})
export class AppModule {}

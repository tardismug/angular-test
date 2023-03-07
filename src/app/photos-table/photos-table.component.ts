import { Component } from '@angular/core';
import { Photo } from '../../photos/photos';
import { PhotosService } from '../../photos/photos.service';

@Component({
  selector: 'app-photos-table',
  templateUrl: './photos-table.component.html',
  styleUrls: ['./photos-table.component.css'],
})
export class PhotosTableComponent {
  public Tri = 'all';
  public Tagselected = 'all';

  allphotos: Photo[] = [];
  alltags: Array<string> = [];

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.setAllPhotos();
    this.setAllTags();
  }
  reload() {
    this.setAllPhotos();
  }

  setAllPhotos() {
    this.allphotos = this.photosService.getPhotos();
  }

  setAllTags() {
    this.alltags = this.photosService.getAllTags();
  }
}

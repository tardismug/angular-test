import { Component } from '@angular/core';
import { Photo } from '../../photos/photos';
import { PhotosService } from '../../photos/photos.service';
@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
})
export class PhotosListComponent {
  public Tri = 'all';
  public Tagselected = 'all';

  mostsoldphotos: Photo[] = [];
  leastsoldphotos: Photo[] = [];
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
    if (this.Tri == 'least') {
      this.allphotos = this.photosService.getLeastSoldPhotos();
    } else if (this.Tri == 'most') {
      this.allphotos = this.photosService.getMostSoldPhotos();
    } else {
      this.allphotos = this.photosService.getPhotos();
    }
  }

  setAllTags() {
    this.alltags = this.photosService.getAllTags();
  }
}

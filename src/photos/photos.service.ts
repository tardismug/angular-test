import { Injectable } from '@angular/core';

import { Photo } from './photos';
import { PHOTOS } from './mock-photos';

@Injectable()
export class PhotosService {
  constructor() {}
  getPhotos(): Photo[] {
    return PHOTOS.sort((a, b) => (b.name > a.name ? -1 : 1));
  }
  getMostSoldPhotos(): Photo[] {
    return PHOTOS.sort((a, b) => b.sell - a.sell).slice(0, 3);
  }
  getLeastSoldPhotos(): Photo[] {
    return PHOTOS.sort((a, b) => a.sell - b.sell).slice(0, 3);
  }
  getAllTags() {
    var Tags = new Array();
    var EachTag = new Array();
    var AllPHotos = PHOTOS.sort((a, b) => (b.name > a.name ? -1 : 1));
    PHOTOS.forEach(function (value) {
      EachTag.push(value.tags);
    });
    EachTag.forEach(function (item1) {
      item1.forEach(function (value: any) {
        if (Tags.includes(value)) {
        } else {
          Tags.push(value);
        }
      });
    });
    return Tags.sort((a, b) => (b > a ? -1 : 1));
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosTableComponent } from './photos-table/photos-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: PhotosListComponent },
  { path: 'table', component: PhotosTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogTableComponent } from './blog-table/blog-table.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  { path: 'blog-detail/:id', component: BlogDetailComponent },
  { path: '**', component: BlogTableComponent }
];

@NgModule({
  declarations: [
    BlogDetailComponent,
    BlogTableComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

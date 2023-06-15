import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BlogDataService } from '../services/blog-data.service';
import { BlogModel } from '../domain/blog.model';

@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.css']
})
export class BlogTableComponent implements OnInit {
  blogData: BlogModel[] | undefined;
  isClicked: boolean = false;
  currentPage = 1;
  totalPages = 10;

  constructor(private blogDataService: BlogDataService, private router: Router) { }
  ngOnInit() {
    this.loadData();
  }

  onClick(row: any) {
    this.router.navigate(['blog-detail', row.id]);
    this.isClicked = !this.isClicked;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadData();
  }

  loadData(): void {
    this.blogDataService.getPaginatedData(this.totalPages, this.currentPage).subscribe((data: BlogModel[]) => {
      this.blogData = data;
      this.totalPages = Math.ceil(data.length / 10);
    });
  }
}

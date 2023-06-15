import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BlogDataService } from '../services/blog-data.service';
import { BlogModel } from '../domain/blog.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  constructor(private blogDataService: BlogDataService, private route: ActivatedRoute, private http: HttpClient) { }
  id: number | undefined;
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  data: any;
  blogData: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id') ?? undefined);
    });

    this.blogDataService.getBlogData().subscribe((data: BlogModel[]) => {
      this.getDetails(data, this.id);
    });

  }

  getDetails(data: BlogModel[], id: number | undefined): void {

    data.forEach((element: { id: number; }) => {
      if (element.id == id) {
        this.data = element;
      }
    });
  }

}

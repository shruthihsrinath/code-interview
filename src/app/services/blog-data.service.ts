import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BlogModel } from '../domain/blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  constructor(private http: HttpClient) { }
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  getPaginatedData(totalPages: number, currentPage: number): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>(this.url, {
      params: new HttpParams().set('pageSize', String(totalPages)).set('page', String(currentPage))
    });
  }

  getBlogData(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';
 import {  videoUrl } from './constants';
import { Video } from '../models/video.model';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }


  getVideos(): Observable<Video[]>{

    return this.http.get<Video[]>(`${videoUrl}`);
  }

  // getCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(coursesUrl);
    // .pipe(
    //   catchError(this.handleError)
    // );
  }


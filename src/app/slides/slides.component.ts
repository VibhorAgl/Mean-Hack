import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  constructor(private route: Router, private coursesService: CoursesService) { }

  ngOnInit() {
  }


  searchVideos(searchText){
    console.log(searchText);
    this.route.navigate(['/search',searchText])
  }

}

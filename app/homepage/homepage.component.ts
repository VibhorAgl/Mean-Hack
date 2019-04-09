import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CoursesService } from '../shared/courses.service';
import { Course } from '../models/course.model';
import { Subscription } from 'rxjs';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  // courses: Course[] = [];
  // myLibrary: Course[] = [];
  // isSelected: boolean[];
  // slides: Course[][] = [];
  // Math: any;
  // previous: number;
  // current: number;
  // pageSize: number;
  // selectCourse: Course;
  // loaddetails: boolean;
  // subscription1: Subscription;
  // subscription2: Subscription;
  // deletedCourse: Course[] = [];


// ------------------------------------------videos--------------------------------
  videos:Video[]=[];
  myLibrary: Video[] = [];
  isSelected: boolean[];
  slides: Video[][] = [];
  Math: any;
  previous: number;
  current: number;
  pageSize: number;
  selectVideo: Video;
  loaddetails: boolean;
  subscription1: Subscription;
  subscription2: Subscription;
  deletedVideo: Video[]=[];

  show:boolean;



  

  constructor(private coursesService: CoursesService) {
    this.loaddetails = false;
    this.isSelected = [];
    this.Math = Math;
    this.pageSize = this.getpageSize();
    this.show=false;
  }

  ngOnInit() {

    this.coursesService.getVideos().subscribe(videos=>{
      this.videos=videos;
      this.bookmarkedVideos();
      this.previous = 0;
      this.current = 0;
    })




    // this.coursesService.getCourses().subscribe(courses => {
    //   this.courses = courses.slice(0, 10);
    //   this.bookmarksCourses();

    //   this.previous = 0;
    //   this.current = 0;

    // });

   

  }

  // -- For getting the courses bookmarked by the user. The course list is reversed so that the latest bookmarked
  // -- course appears first. ----------------------------------------------------------------------------------------
  bookmarksCourses() {
    // this.subscription1 = this.coursesService.getBookmarkCourses().subscribe
    // (courses => {
    //   this.courses = courses;
    //   this.courses.reverse();
      this.createSlides();
    // });
  }



  bookmarkedVideos(){
    // this.subscription1 = this.coursesService.getBookmarkCourses().subscribe
    // (courses => {
    //   this.courses = courses;
    //   this.courses.reverse();
    this.createSlides();
    // });

  }

// --- Destroying hte subscription -------------------------------------------------------------------------------
  ngOnDestroy(): void {
    if (this.subscription1) {
    this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
        }
  }

  // -------------- On increasing/decreasing the view size, the number of courses should increse/decrease in the screen. -----

  @HostListener('window:resize', ['$event'])
  onResize(event) {
   const currentPageSize = this.getpageSize();
   if (this.pageSize !== currentPageSize) {
     this.pageSize = currentPageSize;
     this.bookmarksCourses();
   }

  }

  // openSnackBar(mes, dur) {
  //   this.snackBar.openFromComponent(SnackbarComponent, {
  //     data: mes, duration: dur,
  //   });
  // }
// ------              Handling the carousel movement (left and right arrows) --------------------------------------------------------
  selectedItem(index) {
    this.previous = this.current;
    this.current = index;
    this.isSelected[this.previous] = false;
    this.isSelected[this.current] = true;
  }

// --- It is handling the events after user clicks on the CourseDetails link. ---------------------------------
  // selectedCourse(course) {
  //   this.loaddetails = true;
  //   this.selectCourse = course;
  // }
// ------------ If the user wants to remove the bookmarked courses, this function will be executed. -----------------
// -------- It should be noted that even if the courses are bookmarked and inactive, the user can unbookmark it. -------------

  // removeBookMarked(c) {

  // this.subscription2 = this.coursesService.deleteBookmarked(c.course).subscribe(courses => {
  //   this.deletedCourse = courses;
  //   this.openSnackBar(deleteMessage, messageDuration);

//   },
//   (error: AppError) => {
//     if (error instanceof InternalServerError) {
//       alert('Ooops!!! Something went wrong. Why not try refreshing your page?');
//     } else {
//       throw error;
// }
  //     });

  //  const index = this.courses.indexOf(c);
  //   this.courses.splice(index, 1);
  //   this.createSlides();
  // }

// ----- It will create different slides according to the view size. These slides will include courses. ----------------------



// createSlides() {

//     const totalCourses = this.courses.length;
//     console.log(totalCourses);
//     const totalSlides = totalCourses / this.pageSize;
//     let index = 0;
//     this.slides.length = 0;
//     if (totalSlides > 0) {
//       for (let i = 0; i < totalSlides; i++) {
//         this.slides[i] = [];

//         for (let j = 0; j < this.pageSize; j++) {
//           index = i * this.pageSize + j;
//           if (index < totalCourses) {
//             this.slides[i][j] = this.courses[index];

//           }
//         }

//       }
//     } else {
//       this.slides = [] ;

//     }
//     console.log(this.slides[0][1]);

//   }



  createSlides() {

    const totalVideos = this.videos.length;
    console.log(totalVideos);
    const totalSlides = totalVideos / this.pageSize;
    let index = 0;
    this.slides.length = 0;
    if (totalSlides > 0) {
      for (let i = 0; i < totalSlides; i++) {
        this.slides[i] = [];

        for (let j = 0; j < this.pageSize; j++) {
          index = i * this.pageSize + j;
          if (index < totalVideos) {
            this.slides[i][j] = this.videos[index];
            console.log(this.slides);

          }
        }

      }
    } else {
      this.slides = [] ;

    }
   

  }

















// --- It will check the width of the screen everytime. If the width decreases/increases from a particular limit,
// --- the number of courses appearing in a row and column will also be adjusted accordingly. -----------

getwidth() {
  const width = window.innerWidth;
  if (width > 992) {
    return 'col-md-3';
  } else if (width > 768 && width <= 992) {
   return 'col-md-4';
  } else if (width > 576 && width <= 768) {
    return 'col-sm-6';
  } else if (width > 420 && width <= 576) {
    return 'col-6';
  }  else {
    return 'col-12';
  }
}

  getpageSize() {
    const width = window.innerWidth;
    if (width > 992) {
      return 4;
    } else if (width > 768 && width <= 992) {
     return 3;
    }  else {
      return 2;
    }

  }
}
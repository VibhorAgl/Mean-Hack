import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../shared/courses.service';
import { Subscription } from 'rxjs';
import { Video } from '../models/video.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  videos:Video[]=[];
  filteredVideos:Video[]=[];
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
  searchText: string;




  

  constructor(private coursesService: CoursesService,private route: Router,private spinner: NgxSpinnerService, private router: ActivatedRoute) {
    this.loaddetails = false;
    this.isSelected = [];
    this.Math = Math;
    this.pageSize = this.getpageSize();
  }

  ngOnInit() {

    
  



    this.videos=[];
    this.filteredVideos=[];
    this.router.params.subscribe((params) =>{
      this.searchText= params['searchText'];
      if(this.searchText === undefined){
        this.searchText='';
      }
      this.spinner.show();
 
    
      this.coursesService.getVideos().subscribe(videos=>{
        this.videos=videos;
        this.previous = 0;
        this.current = 0;
        this.getSearchResult();
        this.spinner.hide();
      })

    });

    

    
   

  }

  getSearchResult(){
  this.filteredVideos=[];
  if(this.searchText == ''){
    this.filteredVideos=this.videos;
  } else{
    this.filteredVideos=this.videos.filter((video:Video)=>video.title.toLowerCase().includes(this.searchText.toLowerCase()));
    
  }
  this.bookmarkedVideos();

  }

  searchVideos(searchText){
    
    this.route.navigate(['/search',searchText]);
    
  }

  // -- For getting the courses bookmarked by the user. The course list is reversed so that the latest bookmarked
  // -- course appears first. ----------------------------------------------------------------------------------------
  // bookmarksCourses() {
    // this.subscription1 = this.coursesService.getBookmarkCourses().subscribe
    // (courses => {
    //   this.courses = courses;
    //   this.courses.reverse();
      // this.createSlides();
    // });
  // }



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
     this.bookmarkedVideos();
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


  createSlides() {

    const totalVideos = this.filteredVideos.length;
    const totalSlides = totalVideos / this.pageSize;
    let index = 0;
    this.slides.length = 0;
    if (totalSlides > 0) {
      for (let i = 0; i < totalSlides; i++) {
        this.slides[i] = [];

        for (let j = 0; j < this.pageSize; j++) {
          index = i * this.pageSize + j;
          if (index < totalVideos) {
            this.slides[i][j] = this.filteredVideos[index];

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
    return 8;
  } else if (width > 768 && width <= 992) {
   return 6;
  } else if (width > 576 && width <= 768) {
    return 4;
  } else if (width > 420 && width <= 576) {
    return 4;
  }  else {
    return 2;
  }

}
}



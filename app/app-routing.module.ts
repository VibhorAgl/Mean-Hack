import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path :'', component: HomepageComponent},
  { path :'bookmarks', component: BookmarksComponent},
  
  { path :'search/:searchText', component: SearchComponent},
  { path :'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

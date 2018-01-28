import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';

import { Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [
	{ path: 'common', component: CommonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, CommonComponent]
})
export class AppModule { }

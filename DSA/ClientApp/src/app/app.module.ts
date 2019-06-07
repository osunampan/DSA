import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { SStoolsComponent } from './sstools/sstools.component';
import { RequestComponent } from './request/request.component';
import { ValueComponent } from './value/value.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SuccessstoriesComponent } from './successstories/successstories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,  
    ExploreComponent,  
    SStoolsComponent,  
    RequestComponent,
    ValueComponent,  
    HeaderComponent,
    FooterComponent,
    SuccessstoriesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },        
      { path: 'explore', component: ExploreComponent },         
      { path: 'sstools', component: SStoolsComponent }, 
      { path: 'request', component: RequestComponent },     
      { path: 'value', component: ValueComponent },   
      { path: 'request', component: NavMenuComponent }, 
      { path: 'header', component: HeaderComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'successstories', component: SuccessstoriesComponent }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

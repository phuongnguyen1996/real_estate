import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './content/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { SidebarComponent } from './content/sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PostComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatModule } from './mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
  declarations: [
    AppComponent, ToolbarComponent, SidenavComponent
  ],
  imports: [
    MatModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

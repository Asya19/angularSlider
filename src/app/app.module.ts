import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryModule } from './gallery/gallery.module';
// import { GalleryComponent } from './gallery/components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
    HttpClientModule
    // HttpModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

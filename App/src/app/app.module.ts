import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SpeechComponent } from './components/speech/speech.component';
import { SpeechListComponent } from './components/speech-list/speech-list.component';
import { CommentsService } from './services/comments.service';
import { SpeechCreateComponent } from './components/speech-create/speech-create.component';
import { SpeechService } from './services/speech.service';

import { SpinnerComponent } from './shared/component/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpeechComponent,
    SpeechListComponent,
    SpeechCreateComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000
    }),
  ],
  providers: [CommentsService, SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }

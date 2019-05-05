import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { SpeechFilterModel } from 'src/app/models/speechfilter.model';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.scss']
})
export class SpeechListComponent implements OnInit {
  @Output('clickedSpeechEmit')clickedSpeechEmit = new EventEmitter();
  speeches: any[] = [];
  loading: boolean = false;
  constructor( 
    private speechService: SpeechService) { 
      this.speechService.speechEvent.subscribe((res) => {
        this.speeches.push(res);
      });
  }

  ngOnInit() {
    this.getSpeeches();
  }

  getSpeeches(){
    this.loading = true;
    this.speechService.getSpeeches().subscribe((res) => {
      if(res) {
        this.speeches = res;
        this.loading = false;
      }
    })
  }

  filterSpeeches(filterModel: SpeechFilterModel){
    if(this.speeches.length > 0) {
      this.speeches = this.speeches.filter((item) => {
        return item.author.indexOf(filterModel.author) 
        || item.title.indexOf(filterModel.keyword)
        || item.dateCreated.indexOf(filterModel.date) 
      });
    }
  }

  speechClicked(speech:any) {
    this.clickedSpeechEmit.emit(speech);
  }

}

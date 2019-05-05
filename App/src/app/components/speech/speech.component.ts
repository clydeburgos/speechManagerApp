import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SpeechModel } from 'src/app/models/speech.model';
import { SpeechListComponent } from '../speech-list/speech-list.component';
import { SpeechFilterModel } from 'src/app/models/speechfilter.model';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent implements OnInit {
  page: string = 'view';
  @ViewChild('speechList') speechList: SpeechListComponent;
  speechModel: SpeechModel;
  filterSpeechModel: SpeechFilterModel;
  constructor(private speechService: SpeechService, private changeDetect: ChangeDetectorRef) { 
    this.speechService.pageEvent.subscribe((res) => {
      if(res) this.page = res;
    });

    this.speechService.speechEvent.subscribe((res) => {
      if(res) this.page = 'view';
    });
  }

  ngOnInit() {
    this.speechModel = new SpeechModel();
    this.filterSpeechModel = new SpeechFilterModel();
  }

  speechClicked(speech){
    if(speech) {
      this.speechModel = speech;
      this.page = 'view';
    }
  }

  deleteSpeech(speech) {
    this.speechService.deleteSpeech(speech).subscribe((res) => {
      if(res) {
        this.changeDetect.detectChanges();
        this.speechList.speeches = res;
        this.speechModel = new SpeechModel();
      }
    });
  }

  filterSpeech(){
    
  }
}

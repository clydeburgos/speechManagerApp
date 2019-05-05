import { Component, OnInit } from '@angular/core';
import { SpeechModel } from 'src/app/models/speech.model';
import { SpeechService } from 'src/app/services/speech.service';
@Component({
  selector: 'app-speech-create',
  templateUrl: './speech-create.component.html',
  styleUrls: ['./speech-create.component.scss']
})
export class SpeechCreateComponent implements OnInit {
  speechModel: SpeechModel;
  constructor(private speechService: SpeechService) { }

  ngOnInit() {
    this.speechModel = new SpeechModel();
  }

  addSpeech(){
    this.speechService.publishAddedSpeech(this.speechModel);
  }

}

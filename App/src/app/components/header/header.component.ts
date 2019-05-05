import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private speechService: SpeechService) { }

  ngOnInit() {
  }

  navigate(page: string) {
    this.speechService.publishNavigation(page);
  }
}

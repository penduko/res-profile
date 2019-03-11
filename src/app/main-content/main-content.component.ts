import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  animations: [
    trigger('enterHeader', [
      transition(':enter', [
        style({ transform: 'rotate(-180deg)' }),
        animate('1s')
      ])
    ])
  ]
})
export class MainContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

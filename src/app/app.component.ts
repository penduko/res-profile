import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displaySideBar = false;


  sideBar(show: boolean) {
    this.displaySideBar = show;
  }
}

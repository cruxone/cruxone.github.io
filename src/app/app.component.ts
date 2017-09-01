import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHide: boolean;
  title = 'CruxHome';
  constructor() {
    this.showHide = false;
  }
  changeShowStatus(){
    this.showHide = !this.showHide;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  getUrl() {
    return "url('assets/images/GettyImages-106594415_Slate@2x.png')";
  }
}

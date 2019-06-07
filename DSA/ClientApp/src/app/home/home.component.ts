import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  getUrl() {
    return "url('assets/images/GettyImages-106594415_Slate@2x.png')";
  }
}

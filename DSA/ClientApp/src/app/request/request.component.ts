import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  getUrl() {
    return "url('assets/images/GettyImages-106594415_Slate@2x.png')";
  }
}

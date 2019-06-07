import { Component } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent {
  getUrl() {
    return "url('assets/images/GettyImages-106594415_Slate@2x.png')";
  }
}

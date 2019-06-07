import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successstories',
  templateUrl: './successstories.component.html',
  styleUrls: ['./successstories.component.css']
})
export class SuccessstoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getUrl() {
    return "url('assets/images/GettyImages-106594415_Slate@2x.png')";
  }

}

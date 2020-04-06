import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  numberOfClicks = 0;

  plusButtonClicked() {
    this.numberOfClicks = this.numberOfClicks + 1;
  }
  minusButtonClicked() {
    this.numberOfClicks = this.numberOfClicks - 1;
  }
}

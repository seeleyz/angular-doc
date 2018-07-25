import { Component, OnInit } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isLoading = true;
  data: any[];

  constructor() { }

  ngOnInit() {
    this.data = [
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!',
      'out of the 7 billion people in this world, there is only you!'
    ];
    this.isLoading = false;
  }

  onScroll() {
    console.log('滚动了！');
    this.isLoading = true;
    setTimeout(() => {
      this.data = this.data.concat([
        'out of the 7 billion people in this world, there is only you!',
        'out of the 7 billion people in this world, there is only you!',
        'out of the 7 billion people in this world, there is only you!',
        'out of the 7 billion people in this world, there is only you!',
        'out of the 7 billion people in this world, there is only you!'
      ]);
      console.log(this.data.length);
      this.isLoading = false;
    }, 1500);
  }

}

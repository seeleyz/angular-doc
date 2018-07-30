import { Component, OnInit } from '@angular/core';

// import { Hero } from '../../hero';

@Component({
  selector: 'app-tem-ref-var',
  templateUrl: './tem-ref-var.component.html',
  styleUrls: ['./tem-ref-var.component.css']
})
export class TemRefVarComponent implements OnInit {
  hero: any = {};
  submitMessage = '表单提交中...';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(heroForm) {
    console.log(heroForm, '提交');
  }

}

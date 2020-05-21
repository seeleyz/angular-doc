import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

  @Output() scrollEmit = new EventEmitter();

  constructor(private el: ElementRef) { }

  @HostListener('scroll') onscroll() {
    console.log('监听到滚动了！');
    const element = this.el.nativeElement;
    const height = element.scrollHeight;
    const scrollTop = element.scrollTop;
    const clientHeight = element.clientHeight;
    // 如果滚动条滚动高度 + 内容高度 >= 容器高度，就说明到底部了
    if (height - clientHeight - scrollTop <= 20) {
      this.scrollEmit.emit();
    }
  }

}

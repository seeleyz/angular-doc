import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  /**
   * constructor(
    // ElementRef: 引用宿主 DOM 元素
    // ElementRef 通过其 nativeElement 属性给你了直接访问宿主 DOM 元素的能力
    el: ElementRef
  ) {
    // 把宿主元素的背景色设置为了黄色
    // el.nativeElement.style.backgroundColor = 'yellow';
 }*
 **/
  @Input() defaultColor: string;
  @Input('appHighlight') highlightColor: string; // 指定一个用于绑定的别名appHighlight
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

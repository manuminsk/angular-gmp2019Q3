import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
  @Input('appCourseBorder') created: string;

  private createdDate: number;
  private readonly prevDate: number;
  private readonly currentDate: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.currentDate = Date.now();
    // 14 * 24 * 60 * 60 * 1000 - means 14 days in milliseconds
    this.prevDate = this.currentDate - 14 * 24 * 60 * 60 * 1000;
  }

  public ngOnInit(): void {
    this.createdDate = Date.parse(this.created);

    if (this.createdDate < this.currentDate && this.createdDate >= this.prevDate) {
      this.renderer.addClass(this.el.nativeElement, 'border-fresh');
    } else if (this.createdDate > this.currentDate) {
      this.renderer.addClass(this.el.nativeElement, 'border-future');
    }
  }
}

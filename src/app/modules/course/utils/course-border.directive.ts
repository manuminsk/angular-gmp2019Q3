import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
  @Input('appCourseBorder') private created: string;

  private createdDate: number;
  private prevDate: number;
  private currentDate: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.currentDate = Date.now();
    this.prevDate = this.getPreviousDate(this.currentDate);
    this.createdDate = Date.parse(this.created);

    if (this.createdDate < this.currentDate && this.createdDate >= this.prevDate) {
      this.renderer.addClass(this.el.nativeElement, 'border-fresh');
    } else if (this.createdDate > this.currentDate) {
      this.renderer.addClass(this.el.nativeElement, 'border-future');
    }
  }

  private getPreviousDate(date: number): number {
    // 14 * 24 * 60 * 60 * 1000 - means 14 days in milliseconds
    return date - 14 * 24 * 60 * 60 * 1000;
  }
}

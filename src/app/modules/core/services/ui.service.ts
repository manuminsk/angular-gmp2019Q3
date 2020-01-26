import { Injectable } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { Subject } from 'rxjs';
import { map, scan } from 'rxjs/operators';

import { LoaderComponent } from '@core/components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public spin$: Subject<boolean> = new Subject();

  private spinnerRef: OverlayRef = this.cdkSpinnerCreate();

  constructor(private overlay: Overlay) {
    this.spin$
      .asObservable()
      .pipe(
        map(val => (val ? 1 : -1)),
        scan((acc, one) => (acc + one >= 0 ? acc + one : 0), 0)
      )
      .subscribe(res => {
        if (res === 1) {
          this.showSpinner();
        } else if (res === 0 && this.spinnerRef.hasAttached()) {
          this.stopSpinner();
        }
      });
  }

  private cdkSpinnerCreate(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  public showSpinner(): void {
    this.spinnerRef.attach(new ComponentPortal(LoaderComponent));
  }

  public stopSpinner(): void {
    this.spinnerRef.detach();
  }
}

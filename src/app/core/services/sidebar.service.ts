import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _open$ = new BehaviorSubject<boolean>(false);
  open$ = this._open$.asObservable();
  private _lastFocused: HTMLElement | null = null;

  toggle() {
    if (!this._open$.value) { this.captureFocus(); }
    this._open$.next(!this._open$.value);
  }

  open() {
    this.captureFocus();
    this._open$.next(true);
  }

  close() {
    this._open$.next(false);
    this.restoreFocus();
  }

  private captureFocus() {
    try {
      const active = document.activeElement as HTMLElement | null;
      if (active) { this._lastFocused = active; }
    } catch (e) {
      this._lastFocused = null;
    }
  }

  private restoreFocus() {
    try {
      if (this._lastFocused && typeof this._lastFocused.focus === 'function') {
        this._lastFocused.focus();
      }
      this._lastFocused = null;
    } catch (e) {
      this._lastFocused = null;
    }
  }
}

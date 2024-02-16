import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  active: boolean = false;

  private _notifyImageChange = new EventEmitter<any>();

  constructor() {}

  get notifyImageChange(): EventEmitter<any> {
    return this._notifyImageChange;
  }

  openModal() {
    this.active = true;
  }
  closeModal() {
    this.active = false;
  }
}

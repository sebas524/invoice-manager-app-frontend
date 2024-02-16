import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  active: boolean = false;

  constructor() {}

  openModal() {
    this.active = true;
  }
  closeModal() {
    this.active = false;
  }
}

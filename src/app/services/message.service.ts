import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _subject = new Subject();
  constructor() { }

  sendMessage(message: string) {
    this._subject.next({ text: message });
  }
  clearMessage() {
    this._subject.next();
  }
  onMessage() {
    return this._subject.asObservable();
  }
}

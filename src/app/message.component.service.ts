import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import {Dekl} from './dekl.service';

@Injectable({
  providedIn: 'root'
})
export class MessageComponentService {
  // public dekl: Dekl;


  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message});
  }

  sendMessage2(tdekl: Dekl) {
    this.subject.next({ dekl: tdekl});
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}

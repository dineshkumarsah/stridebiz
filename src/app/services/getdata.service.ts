import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, of ,Subject } from 'rxjs';
import { data } from '../model/data'
import { count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private _subject = new Subject();

  constructor(private http: HttpClient) { }

  getBird(): Observable<data> {
    return this.http.get<data>('./assets/bird.json');
  }

  observableCreate(data: any) {
    return Observable.create(
      (subscribe) => {
        try {
          subscribe.next(data);
          subscribe.next('testing observable');
          subscribe.complete();


        } catch (e) {
          subscribe.error(e);

        }

      }
    )
    // observer.subscribe(x=>console.log(x))
  }


  /**
   * of , count operator use 
   */

  ofCountOperator() {
    let all_number = of(1, 2, 3, 4);
    let totalnumber = all_number.pipe(count());
    return totalnumber;
  }
  /**
   * observable is anentity that emits the(multilple data,stream of data) data overtime 
   */
  /**
   * subject is observable that can multicast i.e talk to many obervable
   * consider a button with eventListener the function attached to the event
   * using add listener is clled every time the user clicked on the button 
   * similar functionality goed to subject too
   */
 sendMessage(message: string){
  this._subject.next({text:message})
 }
 clearMessage(){
  this._subject.next()
 }
 onMessage(){
   return this._subject.asObservable();
 }

}

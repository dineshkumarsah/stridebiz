import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import {data} from '../model/data'

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getBird():Observable<data>{
    return this.http.get<data>('./assets/bird.json');
  }
}

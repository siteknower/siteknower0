import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {Dummy} from './dummy.service';

@Injectable({
  providedIn: 'root'
})
export class AsmxService {

  constructor(
    private http: HttpClient
  ) { }

  bok(): string {
    return 'bokbok1';
  }

  konj():  Observable<Dummy> {
    const turl = 'http://www.siteknower.com/hello.asmx/konj';

    return this.http
      .get<Dummy>(turl)
      .pipe(
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            // errorMsg = this.getServerErrorMessage(error);
            errorMsg = `Server error: ${error.status}`;
            console.error(error); // Log the full error response
          }

          alert(errorMsg);
          return throwError(errorMsg);
          // return tdummy;
        })
      );
  }


  hello():  Observable<Dummy> {
    const turl = 'http://www.siteknower.com/hello.asmx/givedummy';

    return this.http
      .get<Dummy>(turl)
      .pipe(
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            // errorMsg = this.getServerErrorMessage(error);
            errorMsg = `Server error: ${error.status}`;
            console.error(error); // Log the full error response
          }

          alert(errorMsg);
          return throwError(errorMsg);
          // return tdummy;
        })
      );
  }

  riba(imeribe: string): Observable<Dummy> {
    let turl = 'http://www.siteknower.com/hello.asmx/riba';
    turl = turl + '?' + "tname=" + imeribe;

    // http://www.siteknower.com/hello.asmx/riba?tname=mesa

    return this.http
      .get<Dummy>(turl)
      .pipe(
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = `Server error: ${error.status}`;
            console.error(error); // Log the full error response
          }

          alert(errorMsg);
          return throwError(errorMsg);
          // return tdummy;
        })
      );
  }


  addlog(temail: string, tlozinka: string):  Observable<Dummy> {
    let turl = 'http://www.siteknower.com/logg.asmx/AddLog';
    turl = turl + '?' + "temail=" + temail;
    turl = turl + '&' + "tlozinka=" + tlozinka;
    // turl = turl + temail + ", "
    // turl = turl + tlozinka + ", "
    // turl = turl + '')';

    return this.http
      .get<Dummy>(turl)
      .pipe(
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            // errorMsg = this.getServerErrorMessage(error);
            errorMsg = `Server error: ${error.status}`;
            console.error(error); // Log the full error response
          }

          alert(errorMsg);
          return throwError(errorMsg);
          // return tdummy;
        })
      );
  }

}

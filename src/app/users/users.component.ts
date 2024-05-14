import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AsmxService } from '../asmx.service';
import {Dummy} from '../dummy.service';

import { Observable, concat, forkJoin, merge } from 'rxjs';
import { catchError, concatAll, concatMap, delay, filter, finalize, mapTo, mergeMap, reduce, switchMap, tap, toArray, zipAll } from 'rxjs/operators';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  public tdummy: Dummy = new Dummy;

  constructor(
    private asmxservice: AsmxService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    var a =0;

    // this.getdata();
  }

  dajClick():void {
    alert ("daj");
    var a = this.asmxservice.bok()
    alert (a);

    let srcObservable= this.asmxservice.hello();
    let srcObservable2= this.asmxservice.konj();
  
    srcObservable // Step 4
    .pipe(
        switchMap( val1 => {
          alert('Source value 1; '+ val1.tekst1)
          alert('starting new observable')
          // return srcObservable2
          return this.asmxservice.riba('Rex i ' + val1.tekst1)
        }),
        // switchMap( val2 => {
        //   alert('Source value 2; '+ val2.tekst1)
        //   alert('starting new observable2')
        //   return innerObservable2
        // }),
    )
    .subscribe(ret=> {
      alert('Recd ' + ret.tekst1);
    });

  }

}

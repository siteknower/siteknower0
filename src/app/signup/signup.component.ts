import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Dekl} from '../dekl.service';
import { environment } from '../../environments/environment';
import {MessageComponentService} from '../message.component.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  doslaporuka: string = 'jos nista ...';
  globv = environment;

  message: any;
  subscription: Subscription;

  private inputType: string = 'password';

  tLogTipHdn1 = false;
  tLogTipHdn2 = true;
  tLogTipHdn3 = true;
  tLogTipHdn4 = true;

  temail: string = '';
  tpassword: string = '';

  constructor(
    public dekl: Dekl,
    private messageService: MessageComponentService,

  ) { 
    this.subscription = this.messageService.getMessage().subscribe(
      message => {
        this.message = message;

        let a = dajobjectkey(message.dekl, 'tekst3');

        if ( this.globv.emit_to_page === 'login') {
          // alert(a);
          this.doslaporuka = 'Lpgin je čuo! ' + a;
          if (a=="sign"){
            this.tLogTipHdn1 = false;
            this.tLogTipHdn2 = true;
            this.tLogTipHdn3 = true;
            this.tLogTipHdn4 = true;
          }
          if (a=="log"){
            this.tLogTipHdn1 = true;
            this.tLogTipHdn2 = false;
            this.tLogTipHdn3 = true;
            this.tLogTipHdn4 = true;
          }
        }
      });
  }

  ngOnInit(): void {
    if (this.dekl.tlogin == 1) {
      this.tLogTipHdn1 = false;
      this.tLogTipHdn2 = true;
      this.tLogTipHdn3 = true;
      this.tLogTipHdn4 = true;
    }
    
    if (this.dekl.tlogin == 2) {
      this.tLogTipHdn1 = true;
      this.tLogTipHdn2 = false;
      this.tLogTipHdn3 = true;
      this.tLogTipHdn4 = true;
    }
  }

  spnLogIn_click(): void {
    // alert('SignIn');

    this.tLogTipHdn1 = true;
    this.tLogTipHdn2 = false;
    this.tLogTipHdn3 = true;
    this.tLogTipHdn4 = true;

  }

}

// function dajobjectkey(tobject: object, tkey: string) {
  function dajobjectkey(tobject: { [key: string]: any }, tkey: string) {
    let result = '';
  
    for (let p in tobject) {
      if ( tobject.hasOwnProperty(p) ) {
        // result += p + ' , ' + message.dekl[p];
        if (p === tkey) {result = tobject[p]; }
      }
    }
    return result;
  }
  
  

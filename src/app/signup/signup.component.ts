import { Component, OnInit, Inject, Injectable, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Dekl} from '../dekl.service';
import { environment } from '../../environments/environment';
import {MessageComponentService} from '../message.component.service';
import { AsmxService } from '../asmx.service';

import{ jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';       

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


// export class SignupComponent implements OnInit {
@Injectable()
export class SignupComponent {
  doslaporuka: string = 'jos nista ...';
  globv = environment;

  message: any;
  subscription: Subscription;
  tmessage: string = 'Dobro jutro jedan dva tri pet sest sedam osam devet';
  tfokusiraj = '';

  private inputType: string = 'password';

  tLogTipHdn1 = false;
  tLogTipHdn2 = true;
  tLogTipHdn3 = true;
  tLogTipHdn4 = true;

  temail1: string = '';
  tpassword1: string = '';
  temail2: string = '';
  tpassword2: string = '';

  hidepasw: boolean = true;

  // @ViewChild('messageWindow') messageWindow: jqxWindowComponent | undefined;
  @ViewChild('messageWindow') messageWindow: jqxWindowComponent | undefined;
  @ViewChild('psw1') inppsw1: ElementRef | undefined;
  @ViewChild('eml1') inpeml1: ElementRef | undefined;

  constructor(
    public dekl: Dekl,
    private messageService: MessageComponentService,
    private asmxservice: AsmxService,
    private router: Router,
    private route: ActivatedRoute
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

  myhidepasw() {
    this.hidepasw = !this.hidepasw;
  }

  ngOnInit(): void {
    this.temail1 = '';
    this.tpassword1 = '';
    this.temail2 = '';
    this.tpassword2 = '';

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

    this.route.paramMap.subscribe(params => {
      // Access the parameters from the URL
      const param1 = params.get('param1'); // Replace 'param1' with your parameter name
      // const param2 = params.get('param2'); // Replace 'param2' with your parameter name
      
      // Do whatever you need with the parameters
      // 'alert('Param1:'+ param1);

      if (param1 == '1') {
        this.tLogTipHdn1 = true;
        this.tLogTipHdn2 = false;
        this.tLogTipHdn3 = true;
        this.tLogTipHdn4 = true;
      }
      // console.log('Param2:', param2);
    });

  }

  ngAfterViewInit(): void {

    var a =0;

    // this.tpassword1 = '3';
  }

  spnLogIn_click(): void {

    this.tLogTipHdn1 = true;
    this.tLogTipHdn2 = false;
    this.tLogTipHdn3 = true;
    this.tLogTipHdn4 = true;

  }

  spnSugnUp_click(): void {

    this.tLogTipHdn1 = false;
    this.tLogTipHdn2 = true;
    this.tLogTipHdn3 = true;
    this.tLogTipHdn4 = true;

  }

  dajkonja(): void {
    alert ("dajkonja");

    this.asmxservice.konj()
    .subscribe(data => {
      alert (data.tekst1);

      if (data.tekst1=='Ok') {
            if (data.tekst3.length > 0) {
              let b = data.tekst3;
  
            } else {
  
            }
  
      } else {  
            alert ('greska 83518');
      }
      
      });
    
   }

   addlog0(): void {
    this.router.navigate(['emailsent']);

   }

   addlog(): void {
    // alert ("addlog");

    if (this.temail1.length === 0) {
        this.tfokusiraj = 'email1';

        this.tmessage = 'You did not enter the e-mail.';
        if (typeof (this.messageWindow) != 'undefined') {
          this.messageWindow.position('center');
          this.messageWindow.open();

          return;
        }
    }
   
    if ( this.validateMail(this.temail1) === 0) {
      this.tfokusiraj = 'email1';

      this.tmessage = 'Incorrect email address.';
      if (typeof (this.messageWindow) != 'undefined') {
        this.messageWindow.position('center');
        this.messageWindow.open();

        return;
      }
    }

    if (this.tpassword1.length === 0) {
      this.tfokusiraj = 'password1';

      this.tmessage = 'You did not enter the password.';
      if (typeof (this.messageWindow) != 'undefined') {
        this.messageWindow.position('center');
        this.messageWindow.open();

        return;
      }

    }

    this.asmxservice.addlog(this.temail1, this.tpassword1)
    .subscribe(data => {
      alert (data.tekst1);

      if (data.tekst1=='yes' || data.tekst1=='error')  {
           
            this.tfokusiraj = 'email1';

            this.tmessage = data.tekst2;
            if (typeof (this.messageWindow) != 'undefined') {
              this.messageWindow.position('center');
              this.messageWindow.open();
      
              return;
            }
      } else {  
            // alert ('ok je ' +data.tekst2);
            this.router.navigate(['emailsent']);
      }
      
      });

   }

   closeMessage(): void {
    if (typeof (this.messageWindow) != 'undefined') {
       this.messageWindow.close();
    }

    this.setFocus(this.tfokusiraj);

  }
   
  setFocus(telement: string): void {
    if (telement === 'email1') {
      if (typeof (this.inpeml1) != 'undefined') {
         this.inpeml1.nativeElement.focus();
      }
    }

    if (telement === 'password1') {    
      if (typeof (this.inppsw1) != 'undefined') {
        this.inppsw1.nativeElement.focus();
     }
    }
    // if (telement === 'eml') {
    //   this.inpeml.nativeElement.focus();
    // }

    // if (telement === 'login_name2') {
    //   this.inplgn2.nativeElement.focus();
    // }

    // if (telement === 'pswd') {
    //   this.inpswd.nativeElement.focus();
    // }

    // if (telement === 'login_name3') {
    //   this.inplgn3.nativeElement.focus();
    // }
    // if (telement === 'eml2') {
    //   this.inpeml2.nativeElement.focus();
    // }

  }

  validateMail(gemail: string): number {
    let rslt = 0;
    // var email = $("#txtEmail").val();
    if (gemail === '') {return 1;}
    if (this.validateEmail(gemail)) {
      rslt = 1;
    } else {
      rslt = 0;
    }
    return rslt;
  }

  validateEmail(temail: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(temail);
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


  //adacco@globalnet.hr
  //voledo1234567890
  
  

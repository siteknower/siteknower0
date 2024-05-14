import { Component, OnInit, ViewChild, AfterViewInit, Renderer2 , ElementRef, Inject, Injectable} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

import { Dekl} from '../../dekl.service';
import {MessageComponentService} from '../../message.component.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})

// export class SiteHeaderComponent implements OnInit {
@Injectable()
export class SiteHeaderComponent {
  globv = environment;

  tmember = '123abc';

  tLogovanjeHdn = false;
  tLoggedHdn = true;

  tLogTipHdn1 = false;
  tLogTipHdn2 = true;
  tLogTipHdn3 = true;
  tLogTipHdn4 = true;

  subscription: Subscription;
  message: any;
  doslaporuka: string = 'jos nista ...';
  tmessage: string = 'Dobro jutro jedan dva tri pet sest sedam osam devet';

  constructor(
    // @Inject(LOCAL_STORAGE) private storage: StorageService,
    public dekl: Dekl,
    private router: Router,
    private messageService: MessageComponentService
  ) { 
    this.subscription = this.messageService.getMessage().subscribe(
      message => {
        this.message = message;

        let a = dajobjectkey(message.dekl, 'tekst3');

        if ( this.globv.emit_to_page === 'header') {
          // alert(a);
          this.doslaporuka = 'Header je čuo! ' + a;
        }
      });

  }

  ngOnInit(): void {
  }

  Login_click(): void {
    this.tLogTipHdn1 = false;
    this.tLogTipHdn2 = true;
    this.tLogTipHdn3 = true;
    this.tLogTipHdn4 = true;

    this.dekl.tlogin=2;
    this.router.navigate(['signup']);

    this.dekl.tekst3 = 'log';
    this.globv.emit_to_page = 'login';
    this.sendMessage2();
  }

  // spnSignIn_click(): void {
  //   // alert('SignIn');

  //   this.tLogTipHdn1 = true;
  //   this.tLogTipHdn2 = false;
  //   this.tLogTipHdn3 = true;
  //   this.tLogTipHdn4 = true;

  // }

  // spnLogIn_click(): void {
  //   // alert('SignIn');

  //   this.tLogTipHdn1 = false;
  //   this.tLogTipHdn2 = true;
  //   this.tLogTipHdn3 = true;
  //   this.tLogTipHdn4 = true;

  //   this.dekl.tlogin=2;
  //   this.router.navigate(['signup']);
  // }

  Signin_click(): void {
    this.tLogTipHdn1 = true;
    this.tLogTipHdn2 = false;
    this.tLogTipHdn4 = true;

    // this.loginWindow.title('Sign in');
    // this.loginWindow.position('center');
    // this.loginWindow.open();

    this.dekl.tlogin=1;
    this.router.navigate(['signup']);

    this.dekl.tekst3 = 'sign';
    this.globv.emit_to_page = 'login';
    this.sendMessage2();
  }

  spnLogout_click(): void {

    localStorage.removeItem('member_name');
    this.tLogovanjeHdn = false;
    this.tLoggedHdn = true;

    // localStorage.setItem('token','xhja787')
    // localStorage.removeItem('token');
    // localStorage.clear();

    // this.dekl.ulogovan = false;

    // this.login_name2 = '';
    // this.pswd = '';
    // this.dekl.ulogovan = false;

    this.router.navigate(['home']);
  }

  sendMessage2(): void {
    // alert('Šaljem');
    
    // send message to subscribers via observable subject
    this.messageService.sendMessage2(this.dekl);
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



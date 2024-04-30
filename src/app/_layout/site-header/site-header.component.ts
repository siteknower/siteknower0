import { Component, OnInit, ViewChild, AfterViewInit, Renderer2 , ElementRef, Inject, Injectable} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

// import { Dekl} from '../../dekl.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})

// export class SiteHeaderComponent implements OnInit {
  @Injectable()
  export class SiteHeaderComponent {

  tmember = '123abc';

  tLogovanjeHdn = false;
  tLoggedHdn = true;

  tLogTipHdn1 = false;
  tLogTipHdn2 = true;
  tLogTipHdn3 = true;
  tLogTipHdn4 = true;

  constructor(
    // @Inject(LOCAL_STORAGE) private storage: StorageService,
    // public dekl: Dekl,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  Login_click(): void {
    // this.selectedStudent.FirstName = 'zeljko';
    // alert('Login');
    this.tLogTipHdn1 = false;
    this.tLogTipHdn2 = true;
    this.tLogTipHdn4 = true;

    // this.loginWindow.position('center');
    // this.loginWindow.open();
  }

  spnSignIn_click(): void {
    // alert('SignIn');

    this.tLogTipHdn1 = true;
    this.tLogTipHdn2 = false;
    this.tLogTipHdn3 = true;
    this.tLogTipHdn4 = true;

  }

  spnLogIn_click(): void {
    // alert('SignIn');

    this.tLogTipHdn1 = false;
    this.tLogTipHdn2 = true;
    this.tLogTipHdn3 = true;
    this.tLogTipHdn4 = true;

  }

  Signin_click(): void {
    this.tLogTipHdn1 = true;
    this.tLogTipHdn2 = false;
    this.tLogTipHdn4 = true;

    // this.loginWindow.title('Sign in');
    // this.loginWindow.position('center');
    // this.loginWindow.open();

    this.router.navigate(['signup']);
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

}

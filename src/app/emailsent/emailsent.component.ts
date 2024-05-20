import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';


@Component({
  selector: 'app-emailsent',
  templateUrl: './emailsent.component.html',
  styleUrls: ['./emailsent.component.css']
})
export class EmailsentComponent implements OnInit {
  public eemail: string = 'wqwq@re.pp';
  globv = environment;

  
  constructor() { }

  ngOnInit(): void {
    

  }

}

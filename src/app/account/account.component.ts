import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  registrationForm!: FormGroup;
  fieldTextType!: boolean;
  repeatFieldTextType!: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initRegForm();
  }

  initRegForm() {
    this.registrationForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required]
    });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
}

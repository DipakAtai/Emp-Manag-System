import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  step: any = 1;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.step = this.step + 1;
  }

  previous() {
    this.step = this.step - 1;
  }

}

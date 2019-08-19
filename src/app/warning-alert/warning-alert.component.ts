import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is a warning you are in danger! </p>`,
  styles: [`
      p {
        padding: 20px;
        background-color: #ffe4e1;
        border: 1px solid red;
      }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

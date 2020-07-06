import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  buttonClassName: string;

  @Input()
  spinnerClassName: string;
  @Input()
  beforeSpinnerMessage: string;
  @Input()
  showSpinner: boolean;
  @Input()
  textWheneSpinnerNotActive: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonClassName = this.buttonClassName != null ? this.buttonClassName : 'btn btn-success';
  }

}

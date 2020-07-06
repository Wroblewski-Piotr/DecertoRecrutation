import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

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
    this.spinnerClassName = this.spinnerClassName != null ? this.spinnerClassName : 'spinner-border text-warning';
    this.beforeSpinnerMessage = this.beforeSpinnerMessage != null ? this.beforeSpinnerMessage : '';
    this.showSpinner = this.showSpinner != null ? this.showSpinner : false;
    this.textWheneSpinnerNotActive = this.textWheneSpinnerNotActive != null ? this.textWheneSpinnerNotActive : '';
  }

}

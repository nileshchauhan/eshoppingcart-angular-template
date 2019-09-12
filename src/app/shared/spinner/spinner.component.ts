import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ng-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  showLoader = false;
  @Input() loading: BehaviorSubject<boolean>;

  constructor() { }

  ngOnInit() {
    this.loading.subscribe((flag: boolean) => {
      this.showLoader = flag;
    });
  }

}

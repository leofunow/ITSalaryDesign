import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, EventEmitter,
  HostListener,
  Input,
  OnInit, Output
} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {tick} from "@angular/core/testing";
import {Subject} from "rxjs";
import {DatePipe} from "@angular/common";
import {Filter} from "../models/filter";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [
    trigger('tabsAnim', [
      state('0', style({'margin-left': '{{cur_margin_left}}', 'width': '{{cur_width}}'}), {
        params: {
          cur_width: '270px',
          cur_margin_left: '-1px'
        }
      }),
      state('1', style({'margin-left': '{{cur_margin_left}}', 'width': '{{cur_width}}'}), {
        params: {
          cur_width: '270px',
          cur_margin_left: '-1px'
        }
      }),
      transition('* <=> *', animate('0.1s ease')),
    ]),
  ],
})
export class EmployeeComponent implements OnInit {

  @Input() curwidth: string = 'calc( 100% / 5 )';
  @Input() curmarginleft: string = '-1px';
  curtab = 0;
  stateswap = 0;
  filters:Filter = {dateStart: '1970-01-01', dateEnd: '0-0-0', lastMonth: false, hideMarked: false};
  @Output() filter: Subject<Filter> = new Subject<Filter>();

  constructor() {
    let tmp = new Date().toLocaleDateString().split('.');
    this.filters.dateEnd = tmp[2]+'-'+tmp[1]+'-'+tmp[0];
    setTimeout(() => {
      this.changetab(0)
    }, 0);
  }

  ChangeClick() {
    this.filter.next(this.filters);
  }

  ngOnInit(): void {
  }

  getactivetab(x: number) {
    if (x == this.curtab)
      return 'active';
    else
      return '';
  }

  changetab(x: number) {
    this.curtab = x;
    let tmp = 0;
    let cb = document.querySelectorAll('.tabs button');
    if (cb) {
      this.curwidth = (cb[x].getBoundingClientRect().width - 2).toString() + 'px';
      for (let i = 0; i < x; i++) {
        tmp += cb[i].getBoundingClientRect().width;
      }

      this.curmarginleft = (tmp - 1).toString() + 'px';
    }
    this.stateswap = (this.stateswap + 1) % 2
  }


}

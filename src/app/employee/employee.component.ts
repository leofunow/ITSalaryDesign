import {AfterContentInit, AfterViewChecked, Component, HostListener, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

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

  @Input() curwidth: string = '270px';
  @Input() curmarginleft: string = '-1px';
  curtab = 0;
  stateswap = 0;
  commentheight = 0;
  curcomment = 0;

  Viplati = [{
    date: "19.01.2022",
    timeRange: "11:00 — 14:00",
    time: "3 часа",
    name: "Экскурсия для представителей Лиги преподавателей",
    smena: "Подготовка",
    mesto: "Сборка двигателя",
    fio: "Иванов И. И.",
    fiodate: "01.01.2022 14:32:31",
    moneyExpected: 1000,
    moneyGot: 2000,
    commentary: "",
    isClicked: false
  },
    {
      date: "19.01.2022",
      timeRange: "11:00 — 14:00",
      time: "3 часа",
      name: "Экскурсия для представителей Лиги преподавателей",
      smena: "Подготовка",
      mesto: "Сборка двигателя",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 1000,
      moneyGot: 2000,
      commentary: "",
      isClicked: false
    },
    {
      date: "19.01.2022",
      timeRange: "11:00 — 14:00",
      time: "3 часа",
      name: "Экскурсия для представителей Лиги преподавателей",
      smena: "Подготовка",
      mesto: "Сборка двигателя",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 1000,
      moneyGot: 2000,
      commentary: "",
      isClicked: false
    },
    {
      date: "19.01.2022",
      timeRange: "11:00 — 14:00",
      time: "3 часа",
      name: "Экскурсия для представителей Лиги преподавателей",
      smena: "Подготовка",
      mesto: "Сборка двигателя",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 1000,
      moneyGot: 2000,
      commentary: "",
      isClicked: false
    },
    {
      date: "19.01.2022",
      timeRange: "11:00 — 14:00",
      time: "3 часа",
      name: "Экскурсия для представителей Лиги преподавателей",
      smena: "Подготовка",
      mesto: "Сборка двигателя",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 1000,
      moneyGot: 2000,
      commentary: "",
      isClicked: false
    },
    {
      date: "19.01.2022",
      timeRange: "11:00 — 14:00",
      time: "3 часа",
      name: "Экскурсия для представителей Лиги преподавателей",
      smena: "Подготовка",
      mesto: "Сборка двигателя",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 1000,
      moneyGot: 2000,
      commentary: "",
      isClicked: false
    },
    {
      date: "19.01.2022",
      timeRange: "11:00 — 14:00",
      time: "3 часа",
      name: "Экскурсия для представителей Лиги преподавателей",
      smena: "Подготовка",
      mesto: "Сборка двигателя",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 1000,
      moneyGot: 2000,
      commentary: "",
      isClicked: false
    },
    {
      date: "19.01.2022",
      timeRange: "11:00 — 14:00",
      time: "3 часа",
      name: "Экскурсия для представителей Лиги преподавателей",
      smena: "Подготовка",
      mesto: "Сборка двигателя",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 1000,
      moneyGot: 2000,
      commentary: "",
      isClicked: false
    },
  ];

  Viplati1 = [{
    fio: "Иванов И. И.", otcheti: 0, sobitia: "2 000 ₽",
    proecti: "12 000 ₽ ", pokupki: "—", summa: "14 000 ₽", sobitiacnt: 1, proecticnt: 1, pokupkicnt: 0
  },
  ];


  constructor() {
  }

  ngOnInit(): void {
    let cb = document.querySelector('.tabs > button')
    if (cb) {
      this.curwidth = cb.clientWidth.toString() + 'px';
    }
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

  commentclick(v: any) {
    let flag = this.Viplati[this.Viplati.indexOf(v)].isClicked;

    this.Viplati[this.Viplati.indexOf(v)].isClicked = !flag;
    if (document.activeElement instanceof HTMLElement && flag)
    {
      document.activeElement.blur();
      this.Viplati[this.Viplati.indexOf(v)].isClicked = false;
    }
  }

  commentunfocus(v: any, event: any){
    let cb = document.querySelector('tbody tr:nth-child('
      + (this.Viplati.indexOf(v) + 1).toString()
      + ') td:last-child textarea');
    let cb2 = document.querySelectorAll('tbody tr:nth-child('
      + (this.Viplati.indexOf(v) + 1).toString()
      + ') td:last-child button');
    // console.log(cb);
    // console.log(event.relatedTarget)
    let flag = this.Viplati[this.Viplati.indexOf(v)].isClicked;
    if (document.activeElement instanceof HTMLElement && flag && event.relatedTarget != cb)
    {
      document.activeElement.blur();
      this.Viplati[this.Viplati.indexOf(v)].isClicked = false;
    }
  }

  getcommentstyle(v: any) {
    this.curcomment=this.Viplati.indexOf(v);
    let cb = document.querySelector('tbody tr:nth-child(' + (this.Viplati.indexOf(v) + 1).toString() + ')')
    if (cb) {
      this.commentheight = cb.getBoundingClientRect().top + cb.getBoundingClientRect().height/2-230;
      // console.log(cb.getBoundingClientRect());
      return 'top:' + (this.commentheight).toString()
        + 'px;left:' + (cb.getBoundingClientRect().width + cb.getBoundingClientRect().left - 240).toString() + 'px;';
    }
    return ''

  }
  scrolltable(){
    let cb = document.querySelector('tbody tr:nth-child(' + (this.curcomment + 1).toString() + ')')
    if (cb)
      this.commentheight = cb.getBoundingClientRect().top + cb.getBoundingClientRect().height/2-230;
  }
  checkCommentButton(v: any) {
    if(this.Viplati[this.Viplati.indexOf(v)].isClicked)
      return 'commentButtonActive';
    return 'commentButton';
  }
  submitcomment(v:any){
    // console.log(v.commentary)
    if (document.activeElement instanceof HTMLElement)
    {
      document.activeElement.blur();
      this.Viplati[this.Viplati.indexOf(v)].isClicked = false;
    }
  }

}

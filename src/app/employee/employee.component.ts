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
      state('2', style({'margin-left': '{{cur_margin_left}}', 'width': '{{cur_width}}'}), {
        params: {
          cur_width: '270px',
          cur_margin_left: '-1px'
        }
      }),
      state('3', style({'margin-left': '{{cur_margin_left}}', 'width': '{{cur_width}}'}), {
        params: {
          cur_width: '270px',
          cur_margin_left: '-1px'
        }
      }),
      state('4', style({'margin-left': '{{cur_margin_left}}', 'width': '{{cur_width}}'}), {
        params: {
          cur_width: '270px',
          cur_margin_left: '-1px'
        }
      }),
      transition('* <=> *', animate('0.1s ease')),
    ]),
  ],
})
export class EmployeeComponent implements OnInit, AfterViewChecked {

  @Input() curwidth: string = '270px';
  @Input() curmarginleft: string = '-1px';
  tablewidth: number[] = [50, 500, 102, 123, 102, 102, 102, 102, 50,];
  curtab = 0;

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
    commentary: ""
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
      commentary: ""
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
      commentary: ""
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
      commentary: ""
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
      commentary: ""
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
      commentary: ""
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
      commentary: ""
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
      commentary: ""
    },
  ];

  Viplati1 = [{
    fio: "Иванов И. И.", otcheti: 0, sobitia: "2 000 ₽",
    proecti: "12 000 ₽ ", pokupki: "—", summa: "14 000 ₽", sobitiacnt: 1, proecticnt: 1, pokupkicnt: 0
  },
  ];


  constructor() {
  }

  ngAfterViewChecked(): void {
    let cb = document.querySelector('.tabs > button')
    if (cb) {
      this.curwidth = cb.clientWidth.toString() + 'px';
    }
    this.onResize(null)
    }

  ngOnInit(): void {
    let cb = document.querySelector('.tabs > button')
    if (cb) {
      this.curwidth = cb.clientWidth.toString() + 'px';
    }
    this.onResize(null);
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
      this.curwidth = (cb[x].clientWidth - 2).toString() + 'px';
      for (let i = 0; i < x; i++) {
        tmp += cb[i].clientWidth;
      }

      this.curmarginleft = (tmp - 1).toString() + 'px';
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    let tds = document.querySelectorAll('tr td');
    console.log(tds[0].textContent)
    while (this.tablewidth.length < tds.length) {
      this.tablewidth.push(1);
    }
    for (let i = 0; i < tds.length; i++) {
      this.tablewidth[i] = tds[i].clientWidth;
    //  -i*i/64
    }
    // console.log(this.tablewidth);
  }

  getTableWidth(x: number) {
    console.log(this.tablewidth[x].toString() + 'px')
    return "width:" + (this.tablewidth[x]).toString() + 'px; overflow:hidden;'
  }

}

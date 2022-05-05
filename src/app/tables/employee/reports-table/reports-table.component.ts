import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.css']
})
export class ReportsTableComponent implements OnInit {

  commentheight = 0;
  curcomment = 0;
  curreport = -1;

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
    isClicked: false,
    isSubmitted: false
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
      isClicked: false,
      isSubmitted: false
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
      isClicked: false,
      isSubmitted: false
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
      isClicked: false,
      isSubmitted: false
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
      isClicked: false,
      isSubmitted: false
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
      isClicked: false,
      isSubmitted: false
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
      isClicked: false,
      isSubmitted: false
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
      isClicked: false,
      isSubmitted: false
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  reportclick(v: any) {
    this.curreport = this.Viplati.indexOf(v);
  }

  bgclick(event: any){
    if(event){
      if(event.target.classList[0] == 'grayBackground')
        this.curreport = -1;
    }
  }
  commentclick(v: any) {
    let flag = this.Viplati[this.Viplati.indexOf(v)].isClicked;

    this.Viplati[this.Viplati.indexOf(v)].isClicked = !flag;
    if (document.activeElement instanceof HTMLElement && flag) {
      document.activeElement.blur();
      this.Viplati[this.Viplati.indexOf(v)].isClicked = false;
    }
  }

  commentunfocus(v: any, event: any) {
    let cb = document.querySelector('tbody tr:nth-child('
      + (this.Viplati.indexOf(v) + 1).toString()
      + ') td:last-child textarea');
    let cb2 = document.querySelectorAll('tbody tr:nth-child('
      + (this.Viplati.indexOf(v) + 1).toString()
      + ') td:last-child button');
    // console.log(cb);
    // console.log(event.relatedTarget)
    let flag = this.Viplati[this.Viplati.indexOf(v)].isClicked;
    if (document.activeElement instanceof HTMLElement && flag && event.relatedTarget != cb) {
      document.activeElement.blur();
      this.Viplati[this.Viplati.indexOf(v)].isClicked = false;
    }
  }

  getcommentstyle(v: any) {
    this.curcomment = this.Viplati.indexOf(v);
    let cb = document.querySelector('tbody tr:nth-child(' + (this.Viplati.indexOf(v) + 1).toString() + ')')
    if (cb) {
      this.commentheight = cb.getBoundingClientRect().top + cb.getBoundingClientRect().height / 2 - 230;
      // console.log(cb.getBoundingClientRect());
      return 'top:' + (this.commentheight).toString()
        + 'px;left:' + (cb.getBoundingClientRect().width + cb.getBoundingClientRect().left - 240).toString() + 'px;';
    }
    return ''

  }

  scrolltable() {
    let cb = document.querySelector('tbody tr:nth-child(' + (this.curcomment + 1).toString() + ')')
    if (cb)
      this.commentheight = cb.getBoundingClientRect().top + cb.getBoundingClientRect().height / 2 - 230;
  }

  checkCommentButton(v: any) {
    if (this.Viplati[this.Viplati.indexOf(v)].isClicked)
      return 'commentButtonActive';
    return 'commentButton';
  }

  submitcomment(v: any) {
    // console.log(v.commentary)
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
      this.Viplati[this.Viplati.indexOf(v)].isClicked = false;
    }
  }

  okclick(v: any) {
    this.Viplati[this.Viplati.indexOf(v)].isSubmitted = true;
    this.Viplati.sort((a, b) => a.isSubmitted >= b.isSubmitted ? +1 : -1)
  }

  editclick(v: any) {
    this.Viplati[this.Viplati.indexOf(v)].isSubmitted = false;
  }
}

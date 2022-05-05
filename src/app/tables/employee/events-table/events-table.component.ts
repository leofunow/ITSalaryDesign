import {Component, Input, OnInit} from '@angular/core';
import {Observable, range, Subscription} from "rxjs";
import {Filter} from "../../../models/filter";

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {

  commentheight = 0;
  curcomment = 0;


  @Input() filter: Observable<Filter> = new Observable<Filter>();
  curFilter: Filter = {dateStart: '1970-01-01', dateEnd: 'no-date', lastMonth: false, hideMarked: false};

  Viplati = [
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
  Viplati_filtered = this.Viplati;

  constructor() {
  }

  ngOnInit(): void {
    this.filter.subscribe((a) => {
      this.filterPayments(a)
    }, (error) => {
      console.log(error)
    });
  }

  filterPayments(a: Filter) {
    if (a.dateEnd == 'no-date')
      return;
    this.curFilter = a;
    if (a.hideMarked) {
      this.Viplati_filtered = []
      for (let i = 0; i < this.Viplati.length; i++) {
        if (!this.Viplati[i].isSubmitted)
          this.Viplati_filtered.push(this.Viplati[i])
      }
    } else {
      this.Viplati_filtered = this.Viplati;
    }
    let ds = a.dateStart;
    let de = a.dateEnd;
    if (a.lastMonth) {
      let tmp = new Date().toLocaleDateString().split('.');
      de = tmp[2] + '-' + tmp[1] + '-' + tmp[0];
      ds = tmp[2] + '-' + ('0' + ((Number(tmp[1]) - 2) % 12 + 1).toString()).slice(-2) + '-' + tmp[0];
    }
    let output = [];
    for (let i = 0; i < this.Viplati_filtered.length; i++) {
      let tmp = this.Viplati_filtered[i].date.split('.');
      if (new Date(tmp[2] + '-' + tmp[1] + '-' + tmp[0]) <= new Date(de)
        && new Date(tmp[2] + '-' + tmp[1] + '-' + tmp[0]) >= new Date(ds))
        output.push(this.Viplati_filtered[i]);
    }
    this.Viplati_filtered = output;

  }

  moneyGotInput(e: any, v: any) {
    if (Number(e.target.textContent)) {
      this.Viplati[this.Viplati.indexOf(v)].moneyGot = Number(e.target.textContent);
      this.Viplati_filtered[this.Viplati_filtered.indexOf(v)].moneyGot = Number(e.target.textContent);
    } else {
    }
  }

  inNumberPressed(e: any) {
    if (isNaN(Number(e.key)) && e.key.length === 1 || e.key == ' ') e.preventDefault();
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

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
      this.Viplati[this.Viplati.indexOf(v)].isClicked = false;
    }
  }

  okclick(v: any) {
    this.Viplati[this.Viplati.indexOf(v)].isSubmitted = true;
    this.Viplati.sort((a, b) => a.isSubmitted >= b.isSubmitted ? +1 : -1);
    this.filterPayments(this.curFilter)
  }

  editclick(v: any) {
    this.Viplati[this.Viplati.indexOf(v)].isSubmitted = false;

    this.filterPayments(this.curFilter)
  }

  expectedSum() {
    let tmpsum = 0;
    for (let v of this.Viplati_filtered) {
      tmpsum += v.moneyExpected;
    }
    return tmpsum;
  }

  gotSum() {
    let tmpsum = 0;
    for (let v of this.Viplati_filtered) {
      tmpsum += v.moneyGot;
    }
    return tmpsum;
  }

}

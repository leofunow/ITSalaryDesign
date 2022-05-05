import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {


  commentheight = 0;
  curcomment = 0;

  Viplati = [{
    date: "19.01.2022",
    timeRange: "12:34:03",
    project: 'ITLab',
    name: "Рефакторинг кода",
    smena: "3 часа",
    role: "Frontend",
    fio: "Иванов И. И.",
    fiodate: "01.01.2022 14:32:31",
    moneyExpected: 3000,
    moneyGot: 2000,
    commentary: "",
    isWrong: true,
    isClicked: false,
    isSubmitted: false
  },
    {
      date: "22.01.2022",
      timeRange: "12:34:03",
      project: 'ITLab Projects',
      name: "Реализация нового функционала",
      smena: "2 часа",
      role: "Backend",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 2000,
      moneyGot: 2000,
      commentary: "",
      isWrong: true,
      isClicked: false,
      isSubmitted: false
    },
    {
      date: "19.01.2022",
      timeRange: "12:34:03",
      project: 'ITLab',
      name: "Рефакторинг кода",
      smena: "3 часа",
      role: "Frontend",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 3000,
      moneyGot: 2000,
      commentary: "",
      isWrong: false,
      isClicked: false,
      isSubmitted: false
    },
    {
      date: "22.01.2022",
      timeRange: "12:34:03",
      project: 'ITLab Projects',
      name: "Реализация нового функционала",
      smena: "2 часа",
      role: "Backend",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 2000,
      moneyGot: 2000,
      commentary: "",
      isWrong: true,
      isClicked: false,
      isSubmitted: false
    },
    {
      date: "19.01.2022",
      timeRange: "12:34:03",
      project: 'ITLab',
      name: "Рефакторинг кода",
      smena: "3 часа",
      role: "Frontend",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 3000,
      moneyGot: 2000,
      commentary: "",
      isWrong: false,
      isClicked: false,
      isSubmitted: false
    },
    {
      date: "22.01.2022",
      timeRange: "12:34:03",
      project: 'ITLab',
      name: "Реализация нового функционала",
      smena: "2 часа",
      role: "Backend",
      fio: "Иванов И. И.",
      fiodate: "01.01.2022 14:32:31",
      moneyExpected: 2000,
      moneyGot: 2000,
      commentary: "",
      isWrong: true,
      isClicked: false,
      isSubmitted: false
    },
  ];

  constructor() {
    this.Viplati.sort((a, b) => a.project >= b.project ? 1 : -1);
    this.Viplati.sort((a, b) => a.isSubmitted >= b.isSubmitted ? 1 : -1);
  }

  ngOnInit(): void {
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

  styleForProject(v: any) {
    if (this.Viplati.indexOf(v) < this.Viplati.length && this.Viplati.indexOf(v) != 0) {
      if (this.Viplati[this.Viplati.indexOf(v)].project === this.Viplati[this.Viplati.indexOf(v) - 1].project) {
        return 'border-top: none';
      }
    }
    return '';
  }

  okclick(v: any) {
    this.Viplati[this.Viplati.indexOf(v)].isSubmitted = true;
    this.Viplati.sort((a, b) => a.isSubmitted >= b.isSubmitted ? +1 : -1);
  }

  editclick(v: any) {
    this.Viplati[this.Viplati.indexOf(v)].isSubmitted = false;
  }


}

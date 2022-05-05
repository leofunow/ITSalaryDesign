import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
  animations: [
    trigger('tabsAnim', [
      state('0', style({'margin-left': '{{cur_margin_left}}', 'width': '{{cur_width}}'}), {
        params: {
          cur_width: '300px',
          cur_margin_left: '-1px'
        }
      }),
      state('1', style({'margin-left': '{{cur_margin_left}}', 'width': '{{cur_width}}'}), {
        params: {
          cur_width: '300px',
          cur_margin_left: '-1px'
        }
      }),
      transition('* <=> *', animate('0.1s ease')),
    ]),
  ],
})
export class MainTableComponent implements OnInit {

  @Input() curwidth: string = '300px';
  @Input() curmarginleft: string = '-1px';
  curtab = 0;
  stateswap = 0;
  Viplati = [{
    fio: "Иванов И. И.", otcheti: "5 000 ₽ ", sobitia: "2 000 ₽",
    proecti: "12 000 ₽ ", pokupki: "—", summa: "19 000 ₽"
  },
    {
      fio: "Петров П. П.", otcheti: "3 000 ₽ ", sobitia: "3 000 ₽",
      proecti: "22 000 ₽", pokupki: "2 000 ₽", summa: "30 000 ₽"
    }, {
      fio: "Иванов И. И.", otcheti: "5 000 ₽ ", sobitia: "2 000 ₽",
      proecti: "12 000 ₽ ", pokupki: "—", summa: "19 000 ₽"
    },
    {
      fio: "Петров П. П.", otcheti: "3 000 ₽ ", sobitia: "3 000 ₽",
      proecti: "22 000 ₽", pokupki: "2 000 ₽", summa: "30 000 ₽"
    }, {
      fio: "Иванов И. И.", otcheti: "5 000 ₽ ", sobitia: "2 000 ₽",
      proecti: "12 000 ₽ ", pokupki: "—", summa: "19 000 ₽"
    },
    {
      fio: "Петров П. П.", otcheti: "3 000 ₽ ", sobitia: "3 000 ₽",
      proecti: "22 000 ₽", pokupki: "2 000 ₽", summa: "30 000 ₽"
    }, {
      fio: "Иванов И. И.", otcheti: "5 000 ₽ ", sobitia: "2 000 ₽",
      proecti: "12 000 ₽ ", pokupki: "—", summa: "19 000 ₽"
    },
    {
      fio: "Петров П. П.", otcheti: "3 000 ₽ ", sobitia: "3 000 ₽",
      proecti: "22 000 ₽", pokupki: "2 000 ₽", summa: "30 000 ₽"
    }, {
      fio: "Иванов И. И.", otcheti: "5 000 ₽ ", sobitia: "2 000 ₽",
      proecti: "12 000 ₽ ", pokupki: "—", summa: "19 000 ₽"
    },
    {
      fio: "Петров П. П.", otcheti: "3 000 ₽ ", sobitia: "3 000 ₽",
      proecti: "22 000 ₽", pokupki: "2 000 ₽", summa: "30 000 ₽"
    }, {
      fio: "Иванов И. И.", otcheti: "5 000 ₽ ", sobitia: "2 000 ₽",
      proecti: "12 000 ₽ ", pokupki: "—", summa: "19 000 ₽"
    },
    {
      fio: "Петров П. П.", otcheti: "3 000 ₽ ", sobitia: "3 000 ₽",
      proecti: "22 000 ₽", pokupki: "2 000 ₽", summa: "30 000 ₽"
    },];
  Viplati1 = [{
    fio: "Иванов И. И.", otcheti: 0, sobitia: "2 000 ₽",
    proecti: "12 000 ₽ ", pokupki: "—", summa: "14 000 ₽", sobitiacnt: 1, proecticnt: 1, pokupkicnt: 0
  },
    {
      fio: "Петров П. П.", otcheti: 1, sobitia: "3 000 ₽",
      proecti: "22 000 ₽ ", pokupki: "2 000 ₽", summa: "27 000 ₽", sobitiacnt: 1, proecticnt: 3, pokupkicnt: 1
    },
    {
      fio: "Иванов И. И.", otcheti: 0, sobitia: "2 000 ₽",
      proecti: "12 000 ₽ ", pokupki: "—", summa: "14 000 ₽", sobitiacnt: 1, proecticnt: 1, pokupkicnt: 0
    },
    {
      fio: "Петров П. П.", otcheti: 1, sobitia: "3 000 ₽",
      proecti: "22 000 ₽ ", pokupki: "2 000 ₽", summa: "27 000 ₽", sobitiacnt: 1, proecticnt: 3, pokupkicnt: 1
    },
    {
      fio: "Иванов И. И.", otcheti: 0, sobitia: "2 000 ₽",
      proecti: "12 000 ₽ ", pokupki: "—", summa: "14 000 ₽", sobitiacnt: 1, proecticnt: 1, pokupkicnt: 0
    },
    {
      fio: "Петров П. П.", otcheti: 1, sobitia: "3 000 ₽",
      proecti: "22 000 ₽ ", pokupki: "2 000 ₽", summa: "27 000 ₽", sobitiacnt: 1, proecticnt: 3, pokupkicnt: 1
    },
    {
      fio: "Иванов И. И.", otcheti: 0, sobitia: "2 000 ₽",
      proecti: "12 000 ₽ ", pokupki: "—", summa: "14 000 ₽", sobitiacnt: 1, proecticnt: 1, pokupkicnt: 0
    },
    {
      fio: "Петров П. П.", otcheti: 1, sobitia: "3 000 ₽",
      proecti: "22 000 ₽ ", pokupki: "2 000 ₽", summa: "27 000 ₽", sobitiacnt: 1, proecticnt: 3, pokupkicnt: 1
    },
    {
      fio: "Иванов И. И.", otcheti: 0, sobitia: "2 000 ₽",
      proecti: "12 000 ₽ ", pokupki: "—", summa: "14 000 ₽", sobitiacnt: 1, proecticnt: 1, pokupkicnt: 0
    },
    {
      fio: "Петров П. П.", otcheti: 1, sobitia: "3 000 ₽",
      proecti: "22 000 ₽ ", pokupki: "2 000 ₽", summa: "27 000 ₽", sobitiacnt: 1, proecticnt: 3, pokupkicnt: 1
    },
  ];
  buttonsList = ''

  constructor() {
    setTimeout(() => {
      this.changetab(0);
    }, 0);

  }

  testfunc() {
    return '';
  }

  ngOnInit(): void {
    // let cb = document.querySelector('.tabs > button');
    // let obs = new MutationObserver((mutationsList, observer)=>{
    //   if (cb) {
    //     this.changetab(0);
    // }
    // });
    // if(cb)
    //   obs.observe(cb, {
    //   attributes: true,
    //   childList: true,
    //   subtree: true
    // });
    // if (cb) {
    //   this.curwidth = cb.clientWidth.toString() + 'px';
    // }

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

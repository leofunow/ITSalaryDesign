import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ITSalaryDesign';
  curtab = 0;
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

  getactivetab(x: number) {
    if (x == this.curtab)
      return 'active';
    else
      return '';
  }

  changetab(x: number) {
    this.curtab = x;
  }
}

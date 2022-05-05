import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expected-payments-table',
  templateUrl: './expected-payments-table.component.html',
  styleUrls: ['./expected-payments-table.component.css']
})
export class ExpectedPaymentsTableComponent implements OnInit {

  Viplati = [{
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

  constructor() {
  }

  ngOnInit(): void {
  }

}

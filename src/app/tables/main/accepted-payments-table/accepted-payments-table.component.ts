import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accepted-payments-table',
  templateUrl: './accepted-payments-table.component.html',
  styleUrls: ['./accepted-payments-table.component.css']
})
export class AcceptedPaymentsTableComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  readonly NOW: Date;
  readonly CURRENT_YEAR: number;
  readonly DAYS_OF_WEEK = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  readonly MONTHS = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  readonly HOLYS: holy_date [] = [
    {
      title: 'jour de l\'an',
      month: 0,
      day: 1
    },
    {
      title: 'fête du travail',
      month: 4,
      day: 1
    },
    {
      title: 'l\'armistice 1945',
      month: 4,
      day: 8
    },
    {
      title: 'fête nationale',
      month: 6,
      day: 14
    },
    {
      title: 'l\'assomption',
      month: 7,
      day: 15
    },
    {
      title: 'toussaint',
      month: 10,
      day: 1
    },
    {
      title: 'l\'armistice 1918',
      month: 10,
      day: 11
    },
    {
      title: 'noël',
      month: 11,
      day: 25
    }
  ];
  status: boolean;

  constructor() {
    this.NOW = new Date();
    this.CURRENT_YEAR = this.NOW.getFullYear();
  }

  ngOnInit() {
  }

  private holy_date(year: number, month: number, day: number): holy_date {
    return this.HOLYS.find((holy: holy_date) =>
      holy.day === day && holy.month === month
    );
  }

  public lastDayOfMonth(): Date {

    const CURRENT_MONTH = this.NOW.getMonth();
    const YEAR = this.NOW.getFullYear();

    let next_month;
    let next_year;

    if (CURRENT_MONTH === 11) {
      next_month = 0;
      next_year = YEAR + 1;
    } else {
      next_month = CURRENT_MONTH + 1;
      next_year = YEAR;
    }
    return new Date(next_year, next_month, 0);
  }

  public countSpace(): number {
    const FIRST_DAY_OF_MONTH = new Date(
      this.NOW.getFullYear(),
      this.NOW.getMonth(),
      1
    ); // récupération du 1er jour du mois

    // FIRST_DAY_OF_MONTH.getDay() 0 <- 0 dimanche 1 lundi, etc.
    return (FIRST_DAY_OF_MONTH.getDay() + 6) % 7;
  }


  previousMonth() {

  }

  nextMonth() {

  }

  selectDay($event) {
    const selectedTimes = document.getElementsByClassName('selected');
    if (selectedTimes.length < 2) {
      $event.target.classList.contains('selected') ?
        $event.target.classList.remove('selected')
        : $event.target.classList.add('selected');
    } else {
      $event.target.classList.remove('selected');
      this.clearPropagate();
    }
    if (selectedTimes.length === 2) {
      this.propagateSelection(selectedTimes[0], selectedTimes[1]);
    }
  }

  propagateSelection(firstSelect, secondSelect) {
    const Times = Array.from(document.getElementsByTagName('time'));

    console.log(firstSelect.innerText, secondSelect.innerText);
    // tslint:disable-next-line:radix
    for (let i = 0; i < ((parseInt(secondSelect.innerText) - parseInt(firstSelect.innerText)) - 1); i++) {
      // tslint:disable-next-line:radix
      Times[parseInt(firstSelect.innerText) + i].classList.add('propagated');
    }
  }

  private clearPropagate() {
    const Propagated = Array.from(document.getElementsByClassName('propagated'));
    for (let i = 0; i < Propagated.length; i++) {
      Propagated[i].classList.remove('propagated');
    }
  }
}

type   calendar_date = {
  date: string,
  title: string
};
type  holy_date = {
  title: string,
  month: number,
  day: number
};

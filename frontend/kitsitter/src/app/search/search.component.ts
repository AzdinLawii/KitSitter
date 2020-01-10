import {Component, OnInit} from '@angular/core';
import {getInputNamesOfClass} from "@angular/core/schematics/migrations/static-queries/angular/directive_inputs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  scope: string;
  checkboxEl: string;

  constructor() {
  }

  ngOnInit() {
  }

  closemenu() {
    const advenced = Array.from(document.getElementsByClassName('advenced'))[0];
      advenced["style"].display = "none";
  }

  open_menu() {
    const advenced = Array.from(document.getElementsByClassName('advenced'))[0];
    console.log(advenced);
    advenced["style"].display = "inline";
  }
}

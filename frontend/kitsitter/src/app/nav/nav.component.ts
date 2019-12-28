import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    const NAV = document.getElementsByTagName('nav')[0];
    const FOOTER = document.getElementsByTagName('footer')[0];
    const MAIN = document.getElementsByTagName('main')[0];
    if (document.body.getBoundingClientRect().width > 500) {
      NAV.classList.toggle('collapsed');
      FOOTER.classList.toggle('collapsed');
      MAIN.classList.toggle('collapsed');
    } else {
      NAV.classList.toggle('expanded');
    }
  }

  resizeMenu() {
    const NAV_LINKS = Array.from(document.getElementsByTagName('nav')[0].getElementsByTagName('a'));
    const FOOTER = document.getElementsByTagName('footer')[0];
    if (document.body.getBoundingClientRect().width > 500) {
      for (const navLink of NAV_LINKS) {
        navLink.style.display = 'inline-block';
      }
    }
    if (document.body.getBoundingClientRect().width < 801) {
      FOOTER.style.width = '100%';
      FOOTER.style.marginLeft = '0';
    }
  }
}

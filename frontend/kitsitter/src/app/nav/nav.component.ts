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
    NAV.classList.toggle('collapsed');
    if (NAV.classList.contains('collapsed')) {
      document.getElementsByTagName('footer')[0].style.marginLeft = 'var(--nv-min-width)';
      document.getElementsByTagName('footer')[0].style.width = 'calc(100vw - var(--nv-min-width))';
      document.getElementsByTagName('main')[0].style.marginLeft = 'var(--nv-min-width)';
      document.getElementsByTagName('main')[0].style.width = 'calc(100vw - var(--nv-min-width))';
    } else {
      document.getElementsByTagName('footer')[0].style.marginLeft = 'var(--nv-width)';
      document.getElementsByTagName('footer')[0].style.width = 'calc(100vw - var(--nv-width))';
      document.getElementsByTagName('main')[0].style.marginLeft = 'var(--nv-width)';
      document.getElementsByTagName('main')[0].style.width = 'calc(100vw - var(--nv-width))';
    }
  }
}

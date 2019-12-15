import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




window.addEventListener('resize', function () {
  adaptApartLink();
  setTopPosition();
  setHeight();
  setMainWidth();
  setNavLinksPosition();
});


function setTopPosition() {
  const MAIN = document.getElementsByTagName('main')[0];
  const HEADER = document.getElementsByTagName('header')[0];
  const NAV = document.getElementsByTagName('nav')[0];
  const HD_HEIGHT = HEADER.getBoundingClientRect().height;
  // NAV.style.top = HD_HEIGHT.toString() + 'px';
  MAIN.style.marginTop = HD_HEIGHT.toString() + 'px';
}

function setHeight() {
  const HEADER = document.getElementsByTagName('header')[0];
  const HEADER_HEIGHT = HEADER.getBoundingClientRect().height;
  const FOOTER = document.getElementsByTagName('footer')[0];
  const FOOTER_HEIGHT = FOOTER.getBoundingClientRect().height;
  const MAIN = document.getElementsByTagName('main')[0];
  const NAV = document.getElementsByTagName('nav')[0];
  const WINDOW_HEIGHT = document.body.style.height;
  const SPACE_TO_FILL = 'calc(' + WINDOW_HEIGHT + ' - ' + HEADER_HEIGHT + 'px - ' + FOOTER_HEIGHT + 'px)';
  NAV.style.height = '100%';
  MAIN.style.minHeight = SPACE_TO_FILL;
}

function setMainWidth() {
  const MAIN = document.getElementsByTagName('main')[0];
  const HEADER = document.getElementsByTagName('header')[0];
  const FOOTER = document.getElementsByTagName('footer')[0];
  const NAV = document.getElementsByTagName('nav')[0];
  let NV_WIDTH = NAV.getBoundingClientRect().width;
  MAIN.style.marginLeft = NV_WIDTH.toString() + 'px';
  MAIN.style.width = 'calc(100% - ' + NV_WIDTH + 'px)';
  HEADER.style.marginLeft = NV_WIDTH.toString() + 'px';
  HEADER.style.width = 'calc(100% - ' + NV_WIDTH + 'px)';
  FOOTER.style.marginLeft = NV_WIDTH.toString() + 'px';
  FOOTER.style.width = 'calc(100% - ' + NV_WIDTH + 'px)';
}

function setNavLinksPosition() {
  const NAV = document.getElementsByTagName('nav')[0];
  const NAV_HEIGHT = NAV.getBoundingClientRect().height;
  const NAV_LINKS = NAV.getElementsByTagName('a');
  const NAV_NB_OF_LINKS = NAV_LINKS.length;
  const NAV_LINKS_APART = NAV.getElementsByClassName('apart');
  const NAV_NB_OF_LINKS_APART = NAV_LINKS_APART.length;
  const BODY_WIDTH = document.body.getBoundingClientRect().width;
  if (BODY_WIDTH <= 640) {
    const NAV_LINK_HEIGHT = NAV_HEIGHT / (NAV_NB_OF_LINKS - NAV_NB_OF_LINKS_APART - 1);
    for (let i = 0; i < NAV_NB_OF_LINKS; ++i) {

      NAV_LINKS[i].style.height = NAV_LINK_HEIGHT.toString() + 'px';
      NAV_LINKS[i].style.lineHeight = NAV_LINK_HEIGHT.toString() + 'px';
      NAV_LINKS[i].getElementsByTagName('img')[0].style.height = (NAV_LINK_HEIGHT / 5).toString() + 'px';
      NAV_LINKS[i].getElementsByTagName('img')[0].style.marginTop = (NAV_LINK_HEIGHT / 4).toString() + 'px';
    }
  } else {
    const NAV_LINK_HEIGHT = NAV_HEIGHT / (NAV_NB_OF_LINKS - NAV_NB_OF_LINKS_APART);
    for (let i = 0; i < NAV_NB_OF_LINKS; ++i) {

      NAV_LINKS[i].style.height = NAV_LINK_HEIGHT.toString() + 'px';
      NAV_LINKS[i].style.lineHeight = NAV_LINK_HEIGHT.toString() + 'px';
      NAV_LINKS[i].getElementsByTagName('img')[0].style.height = (NAV_LINK_HEIGHT / 5).toString() + 'px';
      NAV_LINKS[i].getElementsByTagName('img')[0].style.marginTop = (NAV_LINK_HEIGHT / 4).toString() + 'px';
    }
  }

  if (!!NAV_LINKS_APART && NAV_LINKS_APART.length !== 0) {
    const NAV_LINK_APART_WIDTH = NAV_LINKS_APART[0].getBoundingClientRect().width;
    for (let i = 0; i < NAV_NB_OF_LINKS_APART; ++i) {
      const NAV_LINK_APART_LEFT = BODY_WIDTH - 1.5 * NAV_LINK_APART_WIDTH;
      NAV_LINKS_APART[i].style.left = NAV_LINK_APART_LEFT.toString() + 'px';

    }
  }

}

function adaptApartLink() {
  let BODY_WIDTH = document.body.getBoundingClientRect().width;
  const NAV = document.getElementsByTagName('nav')[0];
  const NAV_LINKS_APART = NAV.getElementsByClassName('apart');
  const NAV_LINKS_PART = NAV.getElementsByClassName('part');
  const MENU_BTN = document.getElementById('menu-button');

  if (BODY_WIDTH <= 640) {
    Array.from(NAV_LINKS_APART).forEach(function (el) {
      el.classList.add('part');
      el.classList.remove('apart');
    });
    MENU_BTN.classList.add('hidden');
  } else if (BODY_WIDTH > 640) {
    Array.from(NAV_LINKS_PART).forEach(function (el) {
      el.classList.add('apart');
      el.classList.remove('part');
    });
    MENU_BTN.classList.remove('hidden');
  }
}
setTopPosition();
setHeight();
setMainWidth();
setNavLinksPosition();
adaptApartLink();

const NAV_BTN = document.getElementById('menu-button');
NAV_BTN.addEventListener('click', toggleMenu);

function toggleMenu() {
  const NAV = document.getElementsByTagName('nav')[0];
  NAV.classList.toggle('collapsed');
  const NAV_LINKS = NAV.getElementsByTagName('a');
  Array.from(NAV_LINKS).forEach(function(el){
    el.classList.toggle('void');
  });

  setMainWidth();
}

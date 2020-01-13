import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  resetEyes() {
    const listeyes = Array.from(document.getElementsByClassName('eye'));
    listeyes.forEach((eyes: HTMLElement) => {
      eyes.classList.add('blink');
      eyes.classList.remove('closed');
      eyes.style.top = '0';
    });
  }

  resetEyesPassword() {
    this.resetEyes();
    const listeyes = Array.from(document.getElementsByClassName('eye'));
    listeyes.forEach((eyes: HTMLElement) => {
      eyes.classList.remove('blink');
      eyes.classList.add('closed');
    });
  }

  moveEyes(input: HTMLInputElement) {
    const emailLength = input.value.length;
    const listLeft = Array.from(document.getElementsByClassName('left'));
    const listRight = Array.from(document.getElementsByClassName('right'));
    // 2. If it's the first character:
    //  2a. move the left pupil to the edge
    const pupilPos = emailLength / 2.5;
    if (emailLength === 1) {
      listLeft.forEach((left: HTMLElement) => {
        left.style.left = '0';
      });
      listRight.forEach((right: HTMLElement) => {
        right.style.left = '0';
      });
    }
// 3. Move pupil based on email length
    if (emailLength >= 1 && emailLength <= 36) {
      listLeft.forEach((left: HTMLElement) => {
        left.style.left = pupilPos + 'px';
        left.style.top = '15px';
      });
      listRight.forEach((right: HTMLElement) => {
        right.style.left = pupilPos + 'px';
        right.style.top = '15px';
      });
    }
  }
}


/**


 function resetEyes() {
    $('.eye').addClass('blink')
    $('.eye').removeClass('closed')

    if ($('.left').css('left') === '12px') {
      return
    }

    $('.inner-eye').css('transform', 'translateY(5px)')
    $('.left').css('transform', 'translateX(12px)')
    $('.right').css('transform', 'translateX(-3px)')
  }
 });**/

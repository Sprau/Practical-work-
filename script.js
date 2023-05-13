const items = document.querySelectorAll('.item');
const mainItems = document.querySelectorAll('.main__item');
const subItems = document.querySelectorAll('.sub__item');


mainItems[0].addEventListener('click', e => {
  if (mainItems[0].classList.contains('open')) {
    for (let i = 0; i < 6; i++) {
      if (!items[i].classList.contains('close')) {
        items[i].classList.add('close')
      }
    }
    mainItems[0].classList.remove('open');
    mainItems[0].firstElementChild.textContent = '+';
    subItems[0].firstElementChild.textContent = '+'
    subItems[1].firstElementChild.textContent = '+'
    
  } else {
    mainItems[0].firstElementChild.textContent = '–';
    mainItems[0].classList.add('open');
  }
  subItems[0].classList.toggle('close');
  subItems[1].classList.toggle('close');
})

mainItems[1].addEventListener('click', e => {
  if (mainItems[1].classList.contains('open')) {
    for (let i = 6; i < 12; i++) {
      if (!items[i].classList.contains('close')) {
        items[i].classList.add('close')
      }
    }
    mainItems[1].classList.remove('open');
    mainItems[1].firstElementChild.textContent = '+';
    subItems[2].firstElementChild.textContent = '+'
    subItems[3].firstElementChild.textContent = '+'
    
  } else {
    mainItems[1].firstElementChild.textContent = '–';
    mainItems[1].classList.add('open');
  }
  subItems[2].classList.toggle('close');
  subItems[3].classList.toggle('close');
})

mainItems[2].addEventListener('click', e => {
  if (mainItems[2].classList.contains('open')) {
    for (let i = 12; i < 18; i++) {
      if (!items[i].classList.contains('close')) {
        items[i].classList.add('close')
      }
    }
    mainItems[2].classList.remove('open');
    mainItems[2].firstElementChild.textContent = '+';
    subItems[4].firstElementChild.textContent = '+'
    subItems[5].firstElementChild.textContent = '+'
    
  } else {
    mainItems[2].firstElementChild.textContent = '–';
    mainItems[2].classList.add('open');
  }
  subItems[4].classList.toggle('close');
  subItems[5].classList.toggle('close');
})

for (let i = 0; i < 6; i++){
  subItems[i].addEventListener('click', e => {
    if (subItems[i].firstElementChild.textContent == '+') {
      subItems[i].firstElementChild.textContent = '–';
    } else {
      subItems[i].firstElementChild.textContent = '+';
    }
    for (let j = i * 3; j < (i + 1) * 3; j++) {
      items[j].classList.toggle('close');
    }
  })
  }
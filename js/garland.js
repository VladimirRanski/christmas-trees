const GARLAND = document.querySelector('.garland');
let order = 1;

setInterval(() => {
  switch (order) {
    case 1:
      GARLAND.classList.add('garland__one');
      GARLAND.classList.remove('garland__four');
      order = 2;
      break;
    case 2:
      GARLAND.classList.add('garland__two');
      GARLAND.classList.remove('garland__one');
      order = 3;
      break;
    case 3:
      GARLAND.classList.add('garland__three');
      GARLAND.classList.remove('garland__two');
      order = 4;
      break;
    case 4:
      GARLAND.classList.add('garland__four');
      GARLAND.classList.remove('garland__three');
      order = 1;
      break;
  }
}, 500)
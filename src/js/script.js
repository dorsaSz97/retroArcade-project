'use strict';

const containers = document.querySelectorAll('.container');

containers.forEach(container =>
  container.addEventListener('click', () => {
    if (container.classList.contains('container--mario')) {
      document.getElementById('showmario').click();
    } else if (container.classList.contains('container--pacman')) {
      document.getElementById('showpacman').click();
    } else if (container.classList.contains('container--duck')) {
      document.getElementById('showduck').click();
    }

    container.classList.add('fadeOut');
  })
);

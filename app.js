const toggler = document.querySelector('.navbar-toggler');
  const menuIcon = document.getElementById('menuIcon');
  const menu = document.getElementById('navbarNav');

  menu.addEventListener('show.bs.collapse', () => {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times', 'icon-rotate');
  });

  menu.addEventListener('hide.bs.collapse', () => {
    menuIcon.classList.remove('fa-times', 'icon-rotate');
    menuIcon.classList.add('fa-bars');
  });
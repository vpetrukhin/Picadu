"use strict";

const menuToggle = document.querySelector('#menu-toggle'),
      sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  sidebar.classList.toggle('active');
});

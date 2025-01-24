// Open Calendar PDF //

function openPDF() {
  window.open('./public/images/pdf/calendar.pdf', '_blank');
}

// Hamburger menu //
const hamburgerMenu = document.getElementById('hamburgerMenu');
const menu = document.getElementById('side-drawer');

// Add click event listener to the hamburger button
hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('visible');
  menu.classList.toggle('hidden');
});

// Imposta l'anno corrente dinamicamente //
document.getElementById('year').textContent = new Date().getFullYear();

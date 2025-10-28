// Toggle navigasi responsif
document.querySelectorAll('[id^="nav-toggle"]').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.nextElementSibling;
    nav.classList.toggle('active');
  });
});

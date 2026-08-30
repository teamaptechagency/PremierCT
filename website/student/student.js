const links = document.querySelectorAll('.nav-link');
const views = document.querySelectorAll('.view');
const title = document.getElementById('page-title');
const menu = document.getElementById('menu-toggle');
links.forEach(link => link.addEventListener('click', () => {
  const view = document.getElementById(link.dataset.view);
  if (!view) return;
  links.forEach(item => item.classList.remove('active'));
  views.forEach(item => item.classList.remove('active'));
  link.classList.add('active'); view.classList.add('active');
  title.textContent = link.textContent.replace(/[0-9০-৯]/g, '').trim();
  menu.checked = false; window.scrollTo({top: 0, behavior: 'smooth'});
}));

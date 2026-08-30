const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const pageTitle = document.getElementById('page-title');
const sidebarToggle = document.getElementById('sidebar-toggle');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    const target = document.getElementById(item.dataset.view);
    if (!target) return;
    navItems.forEach((button) => button.classList.remove('active'));
    views.forEach((view) => view.classList.remove('active'));
    item.classList.add('active');
    target.classList.add('active');
    pageTitle.textContent = item.textContent.replace(/[0-9০-৯]/g, '').trim();
    sidebarToggle.checked = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

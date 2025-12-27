document.addEventListener('DOMContentLoaded', () => {
  /* --- 1. LOGIKA DARK/LIGHT MODE --- */
  const btn = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  
  if (btn) {
    btn.innerHTML = savedTheme === 'dark' ? sunIcon : moonIcon;
    btn.onclick = () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      btn.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
    };
  }

  /* --- 2. LOGIKA MENU DROPDOWN --- */
  const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('myMenu');

  if (hamburger) {
    hamburger.addEventListener('click', (event) => {
      event.stopPropagation(); // Penting: Mencegah event 'window.onclick' langsung menutup menu
      menu.classList.toggle('show');
    });
  }

  // Menutup menu jika klik di mana saja di luar area hamburger dan menu
  window.addEventListener('click', (event) => {
    if (menu && menu.classList.contains('show')) {
      // Jika yang diklik bukan bagian dari hamburger dan bukan bagian dari isi menu
      if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('show');
      }
    }
  });
});
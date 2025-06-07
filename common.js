/* Injects the nav from index.html into other pages */
fetch('index.html')
  .then(r => r.text())
  .then(html => {
    const nav = new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector('nav');
    document.getElementById('nav-placeholder').appendChild(nav.cloneNode(true));
  });

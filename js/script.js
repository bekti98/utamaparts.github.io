// Side Nav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav, {});

// Scroll Smooth
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 80
});

// Material Boxed
const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

// Dark Mode
const darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', function () {
    //const halaman = document.querySelector('#home');

    //halaman.style.backgroundColor = '#212121';
    document.body.classList.toggle('darkMode');
});
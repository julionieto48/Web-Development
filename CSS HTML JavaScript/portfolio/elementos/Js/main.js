/*======================= hide and show menu =======================  */

const navMenu = document.getElementById('nav-menu-stretch'),
      navToggle = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')


navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('show');
})

closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show');
})

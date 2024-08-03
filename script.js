const menu = document.getElementById("menu");
  
const nav = document.getElementsByClassName("links")[0];

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
    nav.style.display = nav.classList.contains('active') ? 'block' : 'none';
}

console.error(menu)
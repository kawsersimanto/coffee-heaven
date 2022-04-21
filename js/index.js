const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{
  navbar.classList.toggle("sticky", window.scrollY > 0);
  toggleBtn.classList.toggle("sticky", window.scrollY > 0);
});

const navLinks = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".toggle-button");
const links = document.querySelectorAll(".nav-links ul li a");

links.forEach(link => link.addEventListener("click", hideLinks));

toggleBtn.addEventListener("click", showLinks);

function showLinks(){
  navLinks.classList.toggle("active");
  toggleBtn.classList.toggle("active");
}

function hideLinks(){
  navLinks.classList.remove("active");
  toggleBtn.classList.remove("active");
}
// cursor js start
const cursor = document.querySelector('.cursor');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const links = Array.from(document.querySelectorAll("a"));

const setCursorLocation = e => {
  let cursorLocation = `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`;
  cursor.setAttribute("style", cursorLocation);
}

document.addEventListener("mousemove", setCursorLocation);

blue.addEventListener("mouseenter", () => cursor.classList.add("cursor-blue") );
yellow.addEventListener("mouseenter", () => cursor.classList.add("cursor-yellow") );

links.forEach( item => {
  
  item.addEventListener("mouseover", () => {
    cursor.classList.add("focus");
  });
  
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("focus");
  });
  
});
// cursor js end




// Typing Animations
var typed = new Typed(".typing", {
  strings: ["web Designer","Frontend Developer", "Web Developer", "UI-UX Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
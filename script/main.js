let nav = document.querySelector('header nav div');
let hamb = document.querySelector('header nav img:last-of-type');
hamb.onclick = function() {
  nav.classList.toggle('show');
}
let navBullets = document.querySelectorAll('header nav div span a');
navBullets.forEach((elm) => {
  elm.onclick = function(event) {
    console.log('ok');
    removeAllActive();
    event.target.style.color = 'hsl(212, 27%, 19%)';
    event.target.style.fontWeight = 'bolder';
    event.target.style.textTransform = 'uppercase';
    event.target.parentNode.style.backgroundColor = 'hsl(51, 100%, 49%)' ;
  };
});

function removeAllActive() {
  navBullets.forEach((elm) => {
    elm.style.color = 'hsl(232, 10%, 55%)';
    elm.style.fontWeight = '200';
    elm.style.textTransform = 'capitalize';
    elm.parentNode.style.backgroundColor = 'transparent' ;
  });
}
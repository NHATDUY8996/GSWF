

let mybutton = document.getElementById("btntop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
let mylogo = document.querySelector('.logonav');
let myheader = document.querySelector(".header");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop < 20) {
    myheader.style.backgroundColor = "transparent";
    // mylogo.style.width = "140px";
  } else {
    myheader.style.backgroundColor = "var(--color-primary)";
    // mylogo.style.width = "30px";
  }
}
// add active
$('.video__item').click(function() {
  $('.video__item').removeClass('active');
  $(this).addClass('active');
});
// select video
let videolist = document.querySelectorAll('.video__list .video__item');

videolist.forEach(vid =>{
  vid.onclick = () =>{
    let src = vid.querySelector('.videoitem').src;
    let title = vid.querySelector('.title__video').innerHTML;
    document.querySelector('.main__video .mainvideo').src = src;
    document.querySelector('.main__video .mainvideo').play();
    document.querySelector('.main__video .mainvideo').play();
  };
});
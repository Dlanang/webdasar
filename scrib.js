function changeText() {
    document.getElementById("demo").innerHTML = "Masuk";
  }

window.onload = function() {
    scrollFunction();
  };
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block"; 
    } else {
      btn.style.display = "none"; 
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
  
  let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px"; /* Adjust according to your navbar height */
  }
  prevScrollpos = currentScrollPos;
}


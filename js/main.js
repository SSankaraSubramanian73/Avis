   // Initialize the typed.js effect
    var typed = new Typed('.typed-text', {
        strings: ["Sivabalaganesh", "a UX UI & Graphic Designer"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
      });
  
      // Smooth scrolling to sections
      $('nav a').on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
          }, 800);
        }
      });
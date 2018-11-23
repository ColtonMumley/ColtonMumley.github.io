$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(e){       
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, "slow");
});

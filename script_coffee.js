// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var animator, even, formatBoxes, greeting, odd, toggler;
    console.log("Welcome to the game of memory");
    formatBoxes = function() {
      return $('.box').css({
        height: '150px',
        width: '150px',
        display: 'inline-block',
        float: 'left'
      });
    };
    formatBoxes();
    odd = function() {
      return $('.odd').css({
        background: 'darkred'
      });
    };
    odd();
    even = function() {
      return $('.even').css({
        background: 'black'
      });
    };
    even();
    greeting = function() {
      if (confirm("Are you ready to play?") === true) {
        $("#main-container").css({
          opacity: "1"
        });
        return animator();
      } else {
        return $("#main-container").css({
          opacity: "0"
        });
      }
    };
    greeting();
    toggler = function() {
      return $('.box').click(function() {
        return $(this).toggleClass('hide');
      });
    };
    toggler();
    animator = function() {
      return $('h1').animate({
        width: '150%',
        opacity: '1',
        marginLeft: '0.6in',
        fontSize: '3em',
        borderWidth: '10px'
      });
    };
    return animator();
  });

}).call(this);

// Lets Create A Wrapper in jQuery's Document Ready Syntax
// for the functions we will build out today.

$(document).ready(function(){

  formatBoxes();
  odd();
  even();
  greeting();
  toggler();
});

  function formatBoxes() {
    $('.box').css({
    'height': '150px',
    'width': '150px',
    'display': 'inline-block',
    'float': 'left'

  });
}

  function odd() {
    $('.odd').css({
    'background': 'darkred'
  });
}

  function even() {
    $('.even').css({
    'background': 'black'
  });
}

  function greeting() {
    if(confirm("Are you going ready to play?") === true){
      $('#main-container').css({
        'opacity': '1'
      });

      animator();
    }
    else {
      $('#main-container').css({
        'opacity': 0

      });
    } 
  }

//   function toggler() {
//     $('.box').click(function(){
//       if($('div:hidden').opacity > 0) {
//         var hiddenElements = $('div:hidden');
//         hiddenElements.addClass('unhidden');
//         hiddenElements.show();
//         $(this).show();
//       } else {
//         var shownElements = $('div.unhidden');
//         shownElements.removeClass('unhidden');
//         shownElements.hide();
//         $(this).hide();
//       }
//       $('hidden').toggle();
//       $('unhidden').toggle();

//       return false;
//     })
// }

  function toggler() {
    $('.box').click(function(){
      $(this).toggleClass('hide');
    });
  }

  function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };


  function arr() {
    var array = ["BYU", "BYU", "UNLV", "UNLV", "Roll Tide", "Roll Tide", "Mitt", "Mitt", "π", "π", "DevPoint", "DevPoint", "Las Vegas", "Las Vegas", "RTR", "RTR"];
    newArray = shuffle(myArray);
  };


  function animator() {
    $('h1').animate({ 

      'width': '150%',
      'opacity': '1',
      'marginLeft': '0.6in',
      'fontSize': '3em',
      'borderWidth': '10px'

    });
  }
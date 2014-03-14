$ -> 
  console.log "Welcome to the game of memory"

  formatBoxes = ->
    $('.box').css
      height: '150px'
      width: '150px'
      display: 'inline-block'
      float: 'left'

  formatBoxes()

  odd = ->
    $('.odd').css
      background: 'darkred'

  odd()

  even = ->
    $('.even').css
      background: 'black'

  even()

  greeting = ->
    if confirm("Are you ready to play?") is true
      $("#main-container").css
        opacity: "1"
      animator()
    else
      $("#main-container").css
        opacity: "0"

  greeting()

  toggler = ->
    $('.box').click ->
      $(@).toggleClass('hide')

  toggler()

  animator = ->
    $('h1').animate
      width: '150%'
      opacity: '1'
      marginLeft: '0.6in'
      fontSize: '3em'
      borderWidth: '10px'

  animator()
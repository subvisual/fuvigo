$ ->
  menu = $('#navigation-menu')
  menuToggle = $('#js-mobile-menu')
  signUp = $('.sign-up')

  toggleMenu = ->
    menu.slideToggle ->
      if(menu.is(':hidden'))
        menu.removeAttr('style')

  $(menuToggle).on 'click', (e) ->
    e.preventDefault()
    toggleMenu()

  # underline under the active nav item
  $(".nav .nav-link").click ->
    toggleMenu()
    $(".nav .nav-link").each ->
      $(this).removeClass("active-nav-item")

    $(this).addClass("active-nav-item")
    $(".nav .more").removeClass("active-nav-item")

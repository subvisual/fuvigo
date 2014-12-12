$ ->
  new hashgrid

  $('.anchor').waypoint ->
    $menu = $('#navigation-menu')
    $currentLink = $menu.find("a[href*='#{this.id}']").parent()
    debugger
    $menu.find('li').removeClass('active-nav-item')
    $currentLink.addClass('active-nav-item')

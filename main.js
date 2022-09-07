$('document').ready(() => {
  const $dropdown = $('.dropdown')
  const $menuItem = $('.menu-item');
  const $menuItemContainer = $('.menu-item-container')
 
$menuItem.on('mouseenter', event => {
    $(event.currentTarget).next().show();
})
$menuItemContainer.on('mouseleave', () => {
    $dropdown.hide();
})


//themese
function changeTheme(body, header, text, border) {
 const $body = $('body');
 const $header = $('header');
 const $all = $('*');
 const $border1 = $('.border-bottom-right');
 const $border2 = $('.border-bottom');
 const $border3 = $('.border-right');
 const $reset = $('.reset')

$body.css('background-color', body);
$header.css('background-color', header);
$all.css('color', text);
$border1.css({
              "border-bottom": "2px solid " + border,
              "border-right": "2px solid " + border
              });
$border2.css("border-bottom", "2px solid " + border)
$border3.css("border-right", "2px solid " + border)
$reset.css("background-color", header)


}

$dark = $('#dark');
$bitcoin = $('#bitcoin');
$noTheme = $('#no-theme');

$dark.on('click', changeTheme("darkgrey", "black", "white", "black"));

//$bitcoin.on('click', changeTheme("orange", "black", "white", "white"))
  



})
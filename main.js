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
function changeTheme(body, header, text, border, backgroundImage = 'none') {
 const $body = $('body');
 const $header = $('header');
 const $dropdownBackground = $('.dropdown')
 const $all = $('*');
 const $border1 = $('.border-bottom-right');
 const $border2 = $('.border-bottom');
 const $border3 = $('.border-right');
 const $reset = $('.reset')

$body.css('background-color', body);
$body.css('background-image', backgroundImage)
$body.css('background-size', '50px')
$header.css('background-color', header);
$dropdownBackground.css('background-color', header);
$all.css('color', text);
$border1.css({
              "border-bottom": "4px solid " + border,
              "border-right": "4px solid " + border
              });
$border2.css("border-bottom", "4px solid " + border)
$border3.css("border-right", "4px solid " + border)
$reset.css("background-color", header)


}

$dark = $('#dark');
$bitcoin = $('#bitcoin');
$noTheme = $('#no-theme');

$dark.on('click', function(body, header, text, border) {
  changeTheme("#39393d", "black", "white", "white");
});

$bitcoin.on('click', function(body, header, text, border, background) {
  changeTheme("#f2a90070", "lightgrey", "black", "black",  'url(https://pngimg.com/uploads/bitcoin/bitcoin_PNG38.png)');
});

$noTheme.on('click', function(body, header, text, border) {
  changeTheme("", "", "", "");
})
  
})
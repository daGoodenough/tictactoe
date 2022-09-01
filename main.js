$('document').ready(() => {
  const $dropdown = $('.dropdown')
  const $menuItem = $('.menu-item');
 
$menuItem.on('mouseenter', event => {
    $(event.currentTarget).next().show();
})
$dropdown.on('mouseleave', () => {
    $dropdown.hide();
})


})
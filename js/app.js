$(function () {
  let button = $('.button');

  function switchToNext() {
    let _this = $(this);

    if (_this.hasClass('active')) return false;
    else {
      $('.button.active').removeClass('active');
      _this.addClass('active');
    }
  }

  button.on('click', switchToNext);
});

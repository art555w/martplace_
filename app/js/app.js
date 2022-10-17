$(function () {
  $('.featured__inner').slick({
    prevArrow:
      '<button class="slick-prev slick-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:
      '<button class="slick-next slick-arrow"><span class="lnr lnr-chevron-right"></span>></button>',
  })
  $('.category__menu-grid').on('click', function () {
    $('.category__menu-grid').addClass('active')
    $('.category__menu-list').removeClass('active')
    $('.category__main').removeClass('list')
    console.log('hi')
  })
  $('.category__menu-list').on('click', function () {
    $('.category__menu-list').addClass('active')
    $('.category__menu-grid').removeClass('active')
    $('.category__main').addClass('list')
  })

  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    grid: true,
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: '$',
  })

  $('.category__item-rate').rateYo({
    rating: 1.5,
    readOnly: true,
  })

  //   const mixer = mixitup('.products__inner')
})

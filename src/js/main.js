import './lib/lib'

$('a').addAttribute('href', 'https://developer.mozilla.org/ru/docs/Web/API/Element/setAttribute');

$('button').on('click', function() {
    $(this).toggleClass('active').html('Hey Yo!');
});

$('button').on('click', function() {
    $('div').eq(0).toggleClass('active_div');
});

$('div').click(function() {
    console.log($(this).index());
});

console.log($('div').eq(1).find('.some'));

console.log($('.more').eq(0).siblings());

$('button').fadeIn(1800);
import './lib/lib'

$('a').addAttribute('href', 'https://developer.mozilla.org/ru/docs/Web/API/Element/setAttribute').removeAttribute('href');

$('button').on('click', function() {
    $(this).toggleClass('active');
});

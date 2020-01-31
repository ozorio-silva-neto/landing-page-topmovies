$(document).ready(function(){

    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.money2').mask("#.##0,00", {reverse: true});
    //$('.uname').mask('AAAAAAAAAAAAAAAAAAAA');
    $('.credit-card').mask('00000000000000000000');
    $('.cvv').mask('0000');
    $('.number').mask('0000000000');

    $('.uname').mask('ZZ',
        {'translation': {
            Z: { pattern: /\S/, optional: true, recursive: true}
        // A: {pattern: /[A-Za-z0-9]/},
        // S: {pattern: /[A-Za-z]/},
        // Y: {pattern: /[0-9]/}
    },
            maxlength: false
    });
});